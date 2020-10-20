import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './cadastro/form/form.component';
import { CadastroPedidoComponent } from './pedido/cadastro-pedido/cadastro-pedido.component';
import { ConsultarPedidoComponent } from './pedido/consultar-pedido/consultar-pedido.component';


const routes: Routes = [
  {path: 'cadastro-ecommerce', component: FormComponent},
  {path: 'cadastro-pedido', component: CadastroPedidoComponent},
  {path: 'consulta-pedido', component: ConsultarPedidoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
