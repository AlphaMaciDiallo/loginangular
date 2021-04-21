import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { RequestOptions } from 'node:https';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  constructor(private http:HttpClient) { }

  getHeaders(){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // TODO: Token

    return headers;
  }

  // getRequestOptions(): RequestOptions {
  //   const options = new RequestOptions();
  //   options.headers = this.getHeaders();

  //   return options;
  // }

  // get(url: string){
  //   return this.http.get(url, this.getRequestOptions());
  // }

  // post(url: string, data: any){
  //   return this.http.post(url, data, this.getRequestOptions());
  // }


}
