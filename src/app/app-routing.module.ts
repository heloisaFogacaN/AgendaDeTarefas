import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaComponent } from './tarefas/tarefas.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PropriedadeComponent } from './propriedade/propriedade.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from 'src/services/auth-guard.service';

const routes: Routes = [
  { path: 'tarefas', component: TarefaComponent},
  { path: 'categorias', component: CategoriasComponent},
  { path: 'propriedade', component: PropriedadeComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// , canActivate : [AuthGuardService]