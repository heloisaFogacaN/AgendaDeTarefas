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
      this.listas = JSON.parse(tarefas);
      this.listas.forEach(usuario => {
        usuario.categoria = usuario.categoria || 'to-do'; 
        this.salvar()
      });
    }
    const categoriasAdd= localStorage.getItem("categorias")
    if(categoriasAdd){
      this.categorias= JSON.parse(categoriasAdd)
    }
  }
  title = 'todo-app';
  mostraInput: boolean=true;
  listas: Tarefa[]=[];
    tarefa: Tarefa ={
      nome: '',
      categoria: ''
    }
    cadastrarTarefa():void{
      const usuario: Tarefa={
        nome:this.tarefa.nome,
        categoria:this.tarefa.categoria
      }

      
      this.listas.push(usuario);
      this.salvar();
      this.tarefa.nome=''
      console.log(this.listas);
    }
    remover(indice:number){
      console.log(indice)
      this.listas.splice(indice,1);
      this.salvar()
    }
    salvar(){
      localStorage.setItem('tarefas',JSON.stringify(this.listas));
    }
  

}