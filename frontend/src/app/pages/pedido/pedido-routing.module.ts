import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuConsultaComponent } from './menu-consulta/menu-consulta.component';
import { TableConsultaComponent } from './table-consulta/table-consulta.component';

const routes: Routes = [
  { path: '', component: MenuConsultaComponent, outlet: "consultarPedido" },
  { path: 'consultarPedido', component: MenuConsultaComponent, outlet: "consultarPedido" },
  { path: 'tableConsulta', component: TableConsultaComponent, outlet: "consultarPedido" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
