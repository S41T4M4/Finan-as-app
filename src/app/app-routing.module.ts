import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContasComponent } from './components/contas/contas.component';
import { MyTransfersComponent } from './components/my-transfers/my-transfers.component';
import { MetasFinanceirasComponent } from './components/metas-financeiras/metas-financeiras.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'contas', component: ContasComponent},
  {path: 'my-transfers', component: MyTransfersComponent},
  {path: 'metas-transferencias', component: MetasFinanceirasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
