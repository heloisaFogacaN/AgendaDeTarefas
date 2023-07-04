import { Component, OnInit } from '@angular/core';
import { User } from '../models/users/user';
import { UserRepository } from 'src/repositores/user.repository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(){

  }

}
