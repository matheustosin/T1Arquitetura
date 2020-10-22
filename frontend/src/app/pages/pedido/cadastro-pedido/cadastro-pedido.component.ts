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
      products: this.formBuilder.array([this.initProducts()]),
      deliverDate: [null],
      requestDate: [null],
      status: [this.statusPedido],
      selectEcommerce: ["", Validators.required]
    });
  }
  ngOnInit(): void {
  }
  onSubmit(formValues) {

  }
  get products(): FormArray {    
    return this.cadastroForm.get("products") as FormArray;
  }
  initProducts() {
    return this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
  addProduct() {
    this.products.push(this.initProducts());
    console.log(this.products);
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
