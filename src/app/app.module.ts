import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TarefaComponent } from 'src/app/tarefas/tarefas.component';
import { CategoriasComponent } from 'src/app/categorias/categorias.component';
import { PropriedadeComponent } from './propriedade/propriedade.component';
import { AppRoutingModule } from './app-routing.module';
import { UserRepository } from 'src/repositores/user.repository';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from 'src/services/auth-guard.service';



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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserRepository,
  AuthGuardService],
  bootstrap: [AppComponent],

})
export class AppModule { }