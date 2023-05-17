import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaComponent } from './tarefas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TarefaComponent], 
  exports: [
    TarefaComponent
  ]
})
export class TarefaModule { }