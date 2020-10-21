import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DpDatePickerModule} from 'ng2-date-picker';

@NgModule({
  declarations: [CadastroPedidoComponent, ConsultarPedidoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    FormsModule
  ]
})
export class PedidoModule { }
