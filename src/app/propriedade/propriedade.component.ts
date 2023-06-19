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
      this.propriedades = JSON.parse(propriedades);
    }
    console.log(propriedades);
  }

  propriedades: Propriedade[] = [] as Propriedade[];
  propriedade: Propriedade ={
    nome: '',
    tipo: '',
    dado: null
  }

  valoresPropriedades: { [nome: string]: any } = {};
  cadastrarPropriedade():void{
    const propriedade: Propriedade={
      nome:this.propriedade.nome,
      tipo:this.propriedade.tipo,
      dado:this.propriedade.dado
    }
    this.propriedades.push(propriedade);
    console.log(this.propriedades)  
    this.salvarLocalStorage()
    this.propriedade.nome='';
  }

  removerPropriedade(indice: number){
    this.propriedades.splice(indice, 1);
    this.salvarLocalStorage()

  }

  salvarLocalStorage(){
    localStorage.setItem("propriedade",JSON.stringify(this.propriedades))
  }

}
