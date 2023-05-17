import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoriasComponent], 
  exports: [
    CategoriasComponent
  ]
})
export class CategoriaModule { }