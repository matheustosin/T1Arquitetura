import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
<<<<<<< HEAD
import { HttpServiceService } from 'src/app/services/http-service.service';
=======
>>>>>>> c24846e0ccfbad9f10ea715c51ef4893b7296187

@Component({
  selector: 'app-gerar-relatorio',
  templateUrl: './gerar-relatorio.component.html',
  styleUrls: ['./gerar-relatorio.component.css'],
})
export class GerarRelatorioComponent implements OnInit {
<<<<<<< HEAD

  public listOrder;

  constructor(private httpService: HttpServiceService) {
  }

  ngOnInit(): void {
    this.getRelatorio();
  }

  async getRelatorio() {
    await this.httpService.getPedido().subscribe(
      (success) => {
        this.listOrder = success;
        console.log(this.listOrder);
      },
      (failure) => {
        console.log(":(");
      }
    );
  }
  sort(attribute){
    console.log(this.listOrder);
    this.listOrder.sort(this.dynamicSort(attribute));
    console.log(this.listOrder);
  }
  dynamicSort(property) {
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result
    }
}
=======
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
>>>>>>> c24846e0ccfbad9f10ea715c51ef4893b7296187
}
