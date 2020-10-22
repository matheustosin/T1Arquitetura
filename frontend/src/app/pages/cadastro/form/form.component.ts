import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  cadastroForm;

  constructor(private formBuilder: FormBuilder, private httpService: HttpServiceService) {
    this.cadastroForm = this.formBuilder.group({
      name: [null, [Validators.required]]
    });
    
  }

  ngOnInit(): void {
  }
  onSubmit(value) {
    const {name} = value
    this.httpService.addEcommerce(name).subscribe(

      (success: HttpResponse<any>) => {
        console.log(success);
      },
      (failure) => {
        console.log(":(");
      }

    );
  }

}
