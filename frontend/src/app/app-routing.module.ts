import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './pages/cadastro/form/form.component';
import { CadastroPedidoComponent } from './pages/pedido/cadastro-pedido/cadastro-pedido.component';
import { ConsultarPedidoComponent } from './pages/pedido/consultar-pedido/consultar-pedido.component';
import { MenuConsultaComponent } from './pages/pedido/menu-consulta/menu-consulta.component';
import { GerarRelatorioComponent } from './pages/relatorio/gerar-relatorio/gerar-relatorio.component';

const routes: Routes = [
  { path: 'cadastro-ecommerce', component: FormComponent },
  { path: 'cadastro-pedido', component: CadastroPedidoComponent },
  { path: 'gerar-relatorio', component: GerarRelatorioComponent },

  {
    path: 'consulta-pedido', component: ConsultarPedidoComponent, children: [
      { path: '', component: MenuConsultaComponent, outlet: "consultarPedido" },
      { path: 'consultarPedido', component: MenuConsultaComponent, outlet: "consultarPedido" }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
