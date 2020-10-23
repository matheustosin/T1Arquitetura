import { NgModule } from '@angular/core';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DpDatePickerModule} from 'ng2-date-picker';
import { PedidoRoutingModule } from './pedido-routing.module';
import {CommonModule} from '@angular/common';
import { MenuConsultaComponent } from './menu-consulta/menu-consulta.component';
@NgModule({
  declarations: [CadastroPedidoComponent, ConsultarPedidoComponent, MenuConsultaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    FormsModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }
