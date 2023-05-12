import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TarefasComponent } from './tarefas/tarefas.component';
import { CategoriasComponent } from './categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
