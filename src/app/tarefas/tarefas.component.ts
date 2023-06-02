import { Component, OnInit } from '@angular/core';
interface Tarefa{
  nome:string
  categoria: string
}


@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefaComponent implements OnInit {
  categorias : String[]=[]

  constructor() { }

  ngOnInit() {
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
  }
  mostraInput: boolean=true;
  listaTarefa: Tarefa[]=[];
    tarefa: Tarefa ={
      nome: '',
      categoria: ''
    }
    cadastrarTarefa():void{
      const usuario: Tarefa={
        nome:this.tarefa.nome,
        categoria:this.tarefa.categoria
      }

      
      this.listaTarefa.push(usuario);
      this.salvarLocalStorage();
      this.tarefa.nome=''
      console.log(this.listaTarefa);
    }
    removerTarefa(indice: number){
      this.listaTarefa.splice(indice, 1);
      this.salvarLocalStorage()
  
    }
    atualizarCategoria(tarefa: Tarefa) {
      this.salvarLocalStorage();
    }

    salvarLocalStorage(){
      localStorage.setItem('tarefas',JSON.stringify(this.listaTarefa));
    }

    atualizarCat(categoria: String){
      localStorage.setItem('drop',JSON.stringify(categoria));
    }

    atualizarDrop(tarefa: Tarefa){
      tarefa.categoria= JSON.parse(localStorage.getItem("drop"));
      this.salvarLocalStorage();
    }
    
}