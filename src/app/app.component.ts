import { Component } from '@angular/core';


interface Tarefa{
  nome: string
  categoria : string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    const tarefas = localStorage.getItem('Tarefas');
    if (tarefas) {
      this.listaTarefas = JSON.parse(tarefas);
    }
  }
  
  mostraInput: boolean = true;
  listaTarefas : Tarefa[]=[];
  listaCategorias=[]

  mostraBotao_Esconde: boolean = true;
  mostraBotao_Mostrar: boolean = true;
  tarefa: Tarefa={
    nome:'',
    categoria: ''
  }

  cadastrarTarefa(): void{
    const usuario: Tarefa = {
      nome: this.tarefa.nome,
      categoria : this.tarefa.categoria
    }
    this.listaTarefas.push(usuario)
    this.salvarLocalStorage()
    this.tarefa.nome=''
    this.tarefa.categoria=''
  }
  cadastrarCategoria(): void{
    this.listaCategorias.push(this.tarefa.categoria);
  
    console.log(this.listaCategorias)
  }
  removerTarefa(indice: number){
    this.listaTarefas.splice(indice, 1);
    this.salvarLocalStorage()

  }
  salvarLocalStorage(){
    localStorage.setItem('Tarefas', JSON.stringify(this.listaTarefas));
  }

  atualizarCategoria(usuario: Tarefa) {
    this.salvarLocalStorage();
  }
  
}
