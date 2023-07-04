import { Component, OnInit } from '@angular/core';
import { User } from '../models/users/user';
import { UserRepository } from 'src/repositores/user.repository';

interface Tarefa{
  nome:string
  categoria: string
  propriedades?: any;
}

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefaComponent implements OnInit {
  categorias : String[]=[];

   trocarAPosicao : number;

   private userId: string = 'diogo.defante';
   private users: User[] = [];
   user!: User;
 
   constructor(private userRepository : UserRepository){
    userRepository.getUsers().subscribe({
      next : (value) =>{
        console.log(value);
      }
    })

   }


  ngOnInit() {
    const categorias = localStorage.getItem('categorias');
  if (categorias) {
    this.categorias = JSON.parse(categorias);
  }
    const tarefas = localStorage.getItem('tarefas');
    if (tarefas) {
      this.listaTarefa = JSON.parse(tarefas);
      this.listaTarefa.forEach(usuario => {
        usuario.categoria = usuario.categoria || 'to-do'; 
        this.salvarLocalStorage()
      });
    }
    const categoriasAdd= localStorage.getItem("categorias")
    if(categoriasAdd){
      this.categorias= JSON.parse(categoriasAdd)
    }
    const propriedadesSalvas = localStorage.getItem('propriedade');

    console.log(propriedadesSalvas)
    if (propriedadesSalvas) {
      this.propriedades = JSON.parse(propriedadesSalvas);
    }
     console.log(this.propriedades)
    }
    

  propriedades: any []=[]
  mostraInput: boolean=true;
  listaTarefa: Tarefa[]=[];
    tarefa: Tarefa ={
      nome: '',
      categoria: ''
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
        alert('Não pode editar');
        return;
      }
      alert('Pode editar');
    }
 
    removerTarefa(): void {
      if (!this.hasPermission('Remove')) {
        alert('Não pode remover');
        return;
      }
      alert('Pode remover');
    }
 
    hasPermission(permission: string): boolean {
     return this.user.cardPermissions === permission;
   }
  
    private getUsuarioLogado(): User {
      return this.users.find((user) => {
        return user.id === this.userId
      }) as User;
    }

    cadastrarTarefa():void{
      const propriedadesCopiadas = this.propriedades.map(propriedade => ({ ...propriedade, valor: propriedade.valor }));
        const novaTarefa: Tarefa={
        nome:this.tarefa.nome,
        categoria:this.tarefa.categoria,
        propriedades: propriedadesCopiadas
        }

      
      this.listaTarefa.push(novaTarefa);
      this.salvarLocalStorage();
      this.tarefa.nome=''
      console.log(this.listaTarefa);
    }
    atualizarCategoria(tarefa: Tarefa) {
      this.salvarLocalStorage();
    }
    tiraTarefa(indice: number){
      this.listaTarefa.splice(indice, 1);
      this.salvarLocalStorage()
  
    }

    salvarLocalStorage(){
      localStorage.setItem('tarefas',JSON.stringify(this.listaTarefa));
    }
 
    atualizarTarefa (tarefa : Tarefa){
      let indice = this.listaTarefa.indexOf(tarefa)
      let removido = this.listaTarefa.splice(indice, 1)[0]
      this.listaTarefa.splice(this.trocarAPosicao, 0, removido)
      tarefa.categoria = JSON.parse(localStorage.getItem("drop"));
      this.salvarLocalStorage;
      this.trocarAPosicao = null;
    }

    posicao(tarefa : Tarefa){
      this.trocarAPosicao = this.listaTarefa.indexOf(tarefa)
    }
     atualizarCat(categoria: String){
       localStorage.setItem('drop',JSON.stringify(categoria));
     }

     atualizarDrop(tarefa: Tarefa){
      if (!this.hasPermission('MoveCard')) {
        alert('Não pode mover');
        return;
      } else {
      alert('Pode mover');
      tarefa.categoria= JSON.parse(localStorage.getItem("drop"));
       this.salvarLocalStorage();
      }
    }

  
  }