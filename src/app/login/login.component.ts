import { Component, OnInit } from '@angular/core';
import { User } from '../models/users/user';
import { UserRepository } from 'src/repositores/user.repository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: User[] = [];
  id: string;
  password: string;

  constructor(private userRepository: UserRepository) {
    userRepository.getUsers().subscribe({
      next: (value) => {
        this.usuarios = value;
      }
    });
  }

  ngOnInit() {
  }

  login() {
    const usuarioLogado = this.findUser();

    if (usuarioLogado) {
      this.setCookie(usuarioLogado);
      const usuarioLogadoString = this.getCookie('usuarioLogado');
      if (usuarioLogadoString) {
        const usuarioLogadoParsed = JSON.parse(usuarioLogadoString);
        console.log(usuarioLogadoParsed);
      } else {
        console.log('Cookie não encontrado');
      }
    } else {
      console.log('Usuário não encontrado');
    }
  }

  findUser() {
    console.log(this.password)
    console.log(this.id)
    return this.usuarios.find(user => user.id === this.id && user.password === this.password);
  }

  setCookie(usuarioLogado) {
    const valueString = JSON.stringify(usuarioLogado);
    const encodedValue = encodeURIComponent(valueString);
    document.cookie = `usuarioLogado=${encodedValue}; path=/`;
    console.log('Cookie definido');
  }

  getCookie(name: string): string | null {
    const cookieString = decodeURIComponent(document.cookie);
    const cookies = cookieString.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
  
      if (cookie.startsWith(name + '=')) {
        const valueString = cookie.substring(name.length + 1);
        return valueString;
      }
    }
  
    return null;
  }
  setLocalStorage(usuarioLogado: User) {
    const usuarioLogadoString = JSON.stringify(usuarioLogado);
    localStorage.setItem('usuarioLogado', usuarioLogadoString);
  }
}
