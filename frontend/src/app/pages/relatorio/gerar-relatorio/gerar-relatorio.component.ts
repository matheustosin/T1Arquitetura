import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-gerar-relatorio',
  templateUrl: './gerar-relatorio.component.html',
  styleUrls: ['./gerar-relatorio.component.css'],
})
export class GerarRelatorioComponent implements OnInit {

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
      },
      (failure) => {
        console.log(":(");
      }
    );
  }
  sort(attribute){
    this.listOrder.sort(this.dynamicSort(attribute));
  }

  dynamicSort(property) {
    return function (a,b) {
      if(property === "ecommerce")
        var result = (a[property]['name'] < b[property]['name']) ? -1 : (a[property]['name'] > b[property]['name']) ? 1 : 0;
        else
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result
    }
}
}
