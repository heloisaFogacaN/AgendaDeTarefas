import { Component, OnInit } from '@angular/core';
import { User } from '../models/users/user';
import { UserRepository } from 'src/repositores/user.repository';

interface Propriedade{
  nome:string
  tipo: string
  valor:any
}


@Component({
  selector: 'app-propriedade',
  templateUrl: './propriedade.component.html',
  styleUrls: ['./propriedade.component.css']
})
export class PropriedadeComponent implements OnInit {
  categorias : String[]=[];

   trocarAPosicao : number;

   private userId: string = 'diogo.defante';
   private users: User[] = [];
   user!: User;
 
   constructor(
   ){}
   

  ngOnInit() {
    const propriedades = localStorage.getItem('propriedade');
    if (propriedades) {
      this.propriedades = JSON.parse(propriedades);
    }
    console.log(propriedades);
  }

  propriedades: Propriedade[]=[];
  propriedade: Propriedade ={
    nome: '',
    tipo: '',
    valor:null
  }
  valoresPropriedades: { [nome: string]: any } = {};
  cadastrarPropriedade():void{
    const propriedade: Propriedade={
      nome:this.propriedade.nome,
      tipo:this.propriedade.tipo,
      valor:this.propriedade.valor
    }

    
    this.propriedades.push(propriedade);
    this.salvar();
    this.propriedade.nome=''

}
adicionarTarefa(): void {
  if (!this.hasPermission('Add')) {
    alert('Não pode cadastrar');
    return;
  }
  alert('Pode cadastrar');
}

editarTarefa(): void {
  if (!this.hasPermission('Edit')) {
    alert('Não pode cadastrar');
    return;
  }
  alert('Pode cadastrar');
}

removerTarefa(): void {
  if (!this.hasPermission('Remove')) {
    alert('Não pode cadastrar');
    return;
  }
  alert('Pode cadastrar');
}
hasPermission(permission: string): boolean {
  return this.user.propertiesPermissions === permission;
}

 private getUsuarioLogado(): User {
   return this.users.find((user) => {
     return user.id === this.userId
   }) as User;
 }
 
salvar(){
  localStorage.setItem('propriedade',JSON.stringify(this.propriedades));
}
remover(indice:number){
  console.log(indice)
  this.propriedades.splice(indice,1);
  this.salvar()
}

}
