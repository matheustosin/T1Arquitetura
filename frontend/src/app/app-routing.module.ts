import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './pages/cadastro/form/form.component';
import { CadastroPedidoComponent } from './pages/pedido/cadastro-pedido/cadastro-pedido.component';
import { ConsultarPedidoComponent } from './pages/pedido/consultar-pedido/consultar-pedido.component';
import { GerarRelatorioComponent } from './pages/relatorio/gerar-relatorio/gerar-relatorio.component';

const routes: Routes = [
  { path: 'cadastro-ecommerce', component: FormComponent },
  { path: 'cadastro-pedido', component: CadastroPedidoComponent },
  { path: 'consulta-pedido', component: ConsultarPedidoComponent },
  { path: 'gerar-relatorio', component: GerarRelatorioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
