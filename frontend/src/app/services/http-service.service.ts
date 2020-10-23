import { environment } from '../../environments/environment';
import { ApiPaths } from '../../enum/ApiPaths';
import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError as observableThrowError} from 'rxjs';
import {catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
  addEcommerce(name: string){
    let url = `${environment.baseUrl}${ApiPaths.ecommerce}add`;
    let data = {name : name};
    return this.http.post(url,data);
  }
  getEcommerce(){
    let url = `${environment.baseUrl}${ApiPaths.ecommerce}all`;
    return this.http.get(url);
  }
  addPedido(data){
    let url = `${environment.baseUrl}${ApiPaths.order}add`;
    return this.http.post(url,data);
  }
  getPedido(): Observable<any[]> {
    let url = `${environment.baseUrl}${ApiPaths.order}getOrdersByParams`;
    return this.http.get(url).pipe(catchError(this.errorHandler)) as any;
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError("Error");
  }
}
