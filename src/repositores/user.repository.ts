import { Injectable } from "@angular/core";
import {users} from '../data/users';

@Injectable()
export class UserRepository {
    constructor(){

    }
    getUsers() {
        return users;
    }

}