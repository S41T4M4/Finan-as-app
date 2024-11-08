import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContasComponent } from './components/contas/contas.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'contas', component: ContasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
