import { Component, OnInit, ViewChild } from '@angular/core';

import { FormArray, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { DatePickerComponent } from 'ng2-date-picker';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent implements OnInit {
  cadastroForm: FormGroup;
  selectedDate;
  // @ViewChild('selectedDate') datePicker: DatePickerComponent;  


  constructor(private formBuilder: FormBuilder) {
    this.cadastroForm = this.formBuilder.group({
      name: ["", Validators.required],
      products: this.formBuilder.array([this.initProducts()]),
      deliverDate: [""],
      requestDate: [""],
      status: [this.statusPedido]

    });
  }
  ngOnInit(): void {

  }
  onSubmit(formValues) {
    console.log(this.cadastroForm.value)
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
    console.log(this.products)
  }

  get statusPedido() {
    return ["Pronto", "Postado", "A caminho", "Chegou"][Math.floor(Math.random() * 4)]
  }


}
