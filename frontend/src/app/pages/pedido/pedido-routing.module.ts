import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';
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
