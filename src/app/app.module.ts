import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TarefaComponent } from 'src/app/tarefas/tarefas.component';
import { CategoriasComponent } from 'src/app/categorias/categorias.component';
import { PropriedadeComponent } from './propriedade/propriedade.component';
import { AppRoutingModule } from './app-routing.module';
import { UserRepository } from 'src/repositores/user.repository';



@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    CategoriasComponent,
    PropriedadeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }