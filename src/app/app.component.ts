import { Component, Input} from '@angular/core';
import { users } from 'src/data/users';
import { UserRepository } from 'src/repositores/user.repository';
import { User } from './models/users/user'; 
import { utf8Encode } from '@angular/compiler/src/util';


  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    private userId: string = 'joao.silva';
    private users : User[] = [];
    user : User | undefined;

    ngOnInit() {
      
    }
    
   constructor(){
    
   }
    private hasPermission(permission : string) : boolean {
      return this.user.cardPermissions.some((permission) => {
        return permission === permission;
      });
    }
    private getUsuarioLogado():User | undefined{
      return this.users.find((user)=> {
        return user.id===this.userId})
      }
    }