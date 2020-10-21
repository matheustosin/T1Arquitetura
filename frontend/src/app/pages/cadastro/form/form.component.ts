import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  cadastroForm;

  constructor(private formBuilder: FormBuilder) {
    this.cadastroForm = this.formBuilder.group({
      name: [null, [Validators.required]]
    });

   }

  ngOnInit(): void {
  }
  onSubmit(value){
    alert(value.name);
  }

}
