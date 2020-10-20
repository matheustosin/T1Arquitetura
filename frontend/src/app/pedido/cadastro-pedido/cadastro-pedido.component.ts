import { Component, OnInit } from '@angular/core';

import { FormArray, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cadastroForm = this.formBuilder.group({
      name: ["", Validators.required],
      products: this.formBuilder.array([this.initProducts()])
    });
  }
  ngOnInit(): void {

  }
  onSubmit(formValues) {
    console.log(this.cadastroForm.value)
  }
  get products() : FormArray{
    return this.cadastroForm.get("products") as FormArray;
  }
  initProducts(){
    return this.formBuilder.group({
      name:['', Validators.required]
    });
  }
  addProduct(){
    this.products.push(this.initProducts());
    console.log(this.products)
  }



}
