import { Injectable } from "@angular/core";
import {users} from '../data/users';
import { User } from "src/app/models/users/user";

@Injectable()
export class UserRepository {
    constructor(){

    }
    getUsers() {
        return users;
    }

}