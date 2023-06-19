import { Component, OnInit } from '@angular/core';

  interface Propriedade{
  nome : string
  tipo : string
  dado : any
  }

@Component({
  selector: 'app-propriedade',
  templateUrl: './propriedade.component.html',
  styleUrls: ['./propriedade.component.css']
})
export class PropriedadeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const propriedades = localStorage.getItem('propriedade');
    if (propriedades) {
      this.propriedadeLista = JSON.parse(propriedades);
    }
    console.log(propriedades);
  }

  propriedadeLista: string[] = [];
  tipoPropriedade: string;
  nomePropriedade: string;
  propriedade : string;
  novaPropriedade: Propriedade ={
    nome: '',
    tipo: '',
    dado: null
  }

  cadastrarPropriedade(){
    console.log(this.novaPropriedade)
    const propriedade : Propriedade = {
      nome:this.novaPropriedade.nome,
      tipo:this.novaPropriedade.tipo,
      dado:this.novaPropriedade.dado
    }
    this.propriedadeLista.push(this.propriedade);
    console.log(this.propriedadeLista)  
    this.salvarLocalStorage()
    this.propriedade='';
  }

  removerCategoria(indice: number){
    this.propriedadeLista.splice(indice, 1);
    this.salvarLocalStorage()

  }

  salvarLocalStorage(){
    localStorage.setItem("propriedade",JSON.stringify(this.propriedadeLista))
  }

}
