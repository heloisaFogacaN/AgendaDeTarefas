import { Component } from '@angular/core';

interface Pessoa{
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
    const tarefas = localStorage.getItem('Usuários');
    if (tarefas) {
      this.usuarios = JSON.parse(tarefas);
    }
  }
  
  mostraInput: boolean = true;
  usuarios : Pessoa[]=[]

  mostraBotao_Esconde: boolean = true;
  mostraBotao_Mostrar: boolean = true;
  pessoa: Pessoa={
    nome:'',
    categoria: ''
  }

  inputMudou(event): void {
    console.log(event);
  }
  esconderInput():void{
    this.mostraInput=false;
  }
  mostrarInput():void{
    this.mostraInput=true;

  }
  cadastrarUsuario(): void{
    const usuario: Pessoa = {
      nome: this.pessoa.nome,
      categoria : this.pessoa.categoria
    }
    this.usuarios.push(usuario)
    this.salvarLocalStorage()
    this.pessoa.nome=''
    
  }
  removerUsuario(indice: number){
    this.usuarios.splice(indice, 1);
    this.salvarLocalStorage()

  }
  salvarLocalStorage(){
    localStorage.setItem('Usuários', JSON.stringify(this.usuarios));
  }

  atualizarCategoria(usuario: Pessoa) {
    this.salvarLocalStorage();
  }
  
}
