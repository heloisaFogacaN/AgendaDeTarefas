import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'categoria-root',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const categoriasAdd=localStorage.getItem("categorias")
    if(categoriasAdd){
      this.categorias = JSON.parse(categoriasAdd)
    }
  }
  novaCategoria: string;
  categorias: string[] = [];
    
    
  cadastrarCategoria(){
    console.log(this.novaCategoria)
    this.categorias.push(this.novaCategoria);
    console.log(this.categorias)  
    localStorage.setItem("categorias",JSON.stringify(this.categorias))
    this.novaCategoria='';
    

  }
  

}