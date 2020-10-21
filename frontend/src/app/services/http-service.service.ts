import { environment } from '../../environments/environment';
import { ApiPaths } from '../../enum/ApiPaths';
import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
  addEcommerce(data){
    let url = `${environment.baseUrl}/${ApiPaths.test}/test`;
    return this.http.get(url);
  }
}
