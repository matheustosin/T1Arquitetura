import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-gerar-relatorio',
  templateUrl: './gerar-relatorio.component.html',
  styleUrls: ['./gerar-relatorio.component.css'],
})
export class GerarRelatorioComponent implements OnInit {
  public cadastroForm: FormGroup;
  public tiposFiltro: string[] = ['Ecommerce', 'Data do Pedido', 'Prazo Cumprido', 'Status do Pedido'];
  public filtroSelecionado: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.cadastroForm = this.formBuilder.group({
      ecommerce: [null],
      requestDate: [null],
      status: [null],
      tiposFiltro: [this.tiposFiltro],
      tipoIinput: [0]
    });
    console.log(this.tiposFiltro)
  }

  ngOnInit(): void {
  }

  public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    this.filtroSelecionado = newVal;
    console.log(this.filtroSelecionado);
  }
}
