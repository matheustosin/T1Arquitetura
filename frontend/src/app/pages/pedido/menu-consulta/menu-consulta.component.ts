import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-menu-consulta',
  templateUrl: './menu-consulta.component.html',
  styleUrls: ['./menu-consulta.component.css']
})
export class MenuConsultaComponent implements OnInit {

  constructor(private httpService : HttpServiceService) { }

  ngOnInit(): void {
    this.getPedido();
  }


  getPedido(){
    this.httpService.getPedido().subscribe(

      (success: HttpResponse<any>) => {
        console.log(success);
      },
      (failure) => {
        console.log(":(");
      }

    );
  }
}
