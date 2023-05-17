import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaComponent } from './tarefas/tarefas.component';
import { CategoriasComponent } from './categorias/categorias.component';

const routes: Routes = [
  { path: 'tarefas', component: TarefaComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }