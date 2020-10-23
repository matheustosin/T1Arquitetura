import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerarRelatorioComponent } from './gerar-relatorio/gerar-relatorio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DpDatePickerModule} from 'ng2-date-picker';

@NgModule({
  declarations: [GerarRelatorioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    FormsModule
  ]
})
export class RelatorioModule { }
