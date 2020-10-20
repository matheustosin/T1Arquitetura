import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CadastroPedidoComponent, ConsultarPedidoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PedidoModule { }
