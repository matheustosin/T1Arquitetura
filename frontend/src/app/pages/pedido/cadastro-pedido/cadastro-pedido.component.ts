import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

import { FormArray, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { DatePickerComponent } from 'ng2-date-picker';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { PedidoStatus } from '../../../../enum/PedidoStatus';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent implements OnInit {
  cadastroForm: FormGroup;
  selectedDate;
  public ecommerces;


  constructor(private formBuilder: FormBuilder, private httpService: HttpServiceService) {
    this.getEcommerces();
    this.cadastroForm = this.formBuilder.group({
      listProducts: this.formBuilder.array([this.initlistProducts()]),
      deliverDate: [null],
      requestDate: [null],
      status: [this.statusPedido],
      selectEcommerce: ["", Validators.required]
    });
  }
  ngOnInit(): void {
  }
  onSubmit(formValues) {
    formValues.deliverDate = formValues.deliverDate.format('YYYY-MM-DD');
    formValues.requestDate = formValues.requestDate.format('YYYY-MM-DD');
    console.log(formValues.deliverDate);
    console.log(formValues.requestDate);
    console.log(formValues.selectEcommerce);
    this.httpService.addPedido(formValues).subscribe(

      (success: HttpResponse<any>) => {
        alert("Adicionado com sucesso!");
      },
      (failure) => {
        console.log(":(");
      }

    );
  }
  get listProducts(): FormArray {
    return this.cadastroForm.get("listProducts") as FormArray;
  }
  initlistProducts() {
    return this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
  addProduct() {
    this.listProducts.push(this.initlistProducts());
  }

  get statusPedido() {
    const res = Object.keys(PedidoStatus);
    const index = Math.floor(Math.random() * res.length)
    return PedidoStatus[res[index]];
  }

  getEcommerces() {
    this.httpService.getEcommerce().subscribe(
      (success: HttpResponse<any>) => {
        this.ecommerces = success
      },
      (failure) => {
        console.log(":(");
      }
    );
  }


}
