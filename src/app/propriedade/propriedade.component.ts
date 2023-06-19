import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propriedade',
  templateUrl: './propriedade.component.html',
  styleUrls: ['./propriedade.component.css']
})
export class PropriedadeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  novaPropriedade: string;
  propriedades: string[] = [];
  tipoPropriedade: string;
  nomePropriedade: string;

  cadastrarPropriedade(){
    console.log(this.novaPropriedade)
    this.propriedades.push(this.novaPropriedade);
    console.log(this.propriedades)  
    this.salvarLocalStorage()
    this.novaPropriedade='';
  }

  salvarLocalStorage(){
    localStorage.setItem("propriedade",JSON.stringify(this.propriedades))
  }

}
