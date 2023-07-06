import { Injectable } from "@angular/core";
import { users } from '../data/users';
import { User } from "src/app/models/users/user";
import{HttpClient}from '@angular/common/http';
import { Observable } from "rxjs";
import {map} from "rxjs/operators";

const API_URL="http://localhost:4300/usuarios"

@Injectable()
export class UserRepository {
    constructor(private httpClient: HttpClient){    

    }

    public getUsers():Observable< User[]> {
        return this.httpClient.get<User[]>(API_URL).pipe(map(values=>{
            const users: User[]=[];
            for(const value of values){
                console.log(value)
                users.push(Object.assign(new User(),value))
            }
            return users;
        }));
    }
    public addUser(user: User): Observable<User> {
        return this.httpClient.post<User>(API_URL, user);
      }

}