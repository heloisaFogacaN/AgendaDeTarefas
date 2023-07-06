import { Component, OnInit } from '@angular/core';
import { User } from '../models/users/user';
import { UserRepository } from 'src/repositores/user.repository';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  id: string;
  name: string;
  cardPermissions: string;
  propertiesPermissions: string;
  password:string;
  email:string;

  constructor(private userRepository: UserRepository) { }


  ngOnInit() {
  }
  cadastrarPessoa() {
    const novoUsuario: User = {
      id: this.id,
      name: this.name,
      password: this.password,
      email: this.email,
      cardPermissions: 'Edit',
      propertiesPermissions: 'Edit'
    };

    this.userRepository.addUser(novoUsuario).subscribe(
      (response) => {
        console.log('Usuário adicionado com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao adicionar usuário:', error);
      }
    );
  }
}