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
}
