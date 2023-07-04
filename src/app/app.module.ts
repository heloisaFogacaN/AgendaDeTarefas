import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TarefaComponent } from './tarefas/tarefas.component'; 
import { CategoriasComponent } from './categorias/categorias.component'; 
import { AppRoutingModule } from './app-routing.module';
import { PropriedadeComponent } from './propriedade/propriedade.component';
import { UserRepository } from 'src/repositores/user.repository';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    CategoriasComponent,
    PropriedadeComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    UserRepository,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }