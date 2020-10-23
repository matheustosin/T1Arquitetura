import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-menu-consulta',
  templateUrl: './menu-consulta.component.html',
  styleUrls: ['./menu-consulta.component.css']
})
export class MenuConsultaComponent implements OnInit {

  public listOrder;
  constructor(private httpService: HttpServiceService) {
    this.getPedido();
  }
  ngOnInit(){
  }
  async getPedido() {
    await this.httpService.getPedido().subscribe(
      (success) => {
        this.listOrder = success;
      },
      (failure) => {
        console.log(":(");
      }
    );
    console.log(this.listOrder);
  }
}
