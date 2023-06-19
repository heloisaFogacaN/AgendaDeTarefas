import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

    cadastrarTarefa():void{
        const novaTarefa: Tarefa={
        nome:this.tarefa.nome,
        categoria:this.tarefa.categoria,
        propriedades: this.tarefa.propriedades
        }

      
      this.listaTarefa.push(novaTarefa);
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
      tarefa.categoria= JSON.parse(localStorage.getItem("drop"));
       this.salvarLocalStorage();
    }
  
    
}