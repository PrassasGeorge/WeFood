import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";

import {Observable} from "rxjs";
import {RegisterModel} from "../app/components/models/RegisterModel";
import {LoginModel} from "../app/components/models/LoginModel";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})



export class AccountService {

private registerUrl= environment.baseUrl+'/authentication/signup';
private loginUrl= environment.baseUrl+'/authentication/signin';
private logoutUrl= environment.baseUrl+'/authentication/logout';
private baseUrl= environment.baseUrl+'/orders/accountDto/'


  constructor(private http:HttpClient) { }


  registerUser(registerModel: RegisterModel): Observable<Object>{
    console.log(registerModel);
    return this.http.post(`${this.registerUrl}`,registerModel,httpOptions);
  }

  loginUser(loginModel: LoginModel): Observable<Object> {
    console.log(loginModel);
    return this.http.post(`${this.loginUrl}`,loginModel, httpOptions);
  }

  logout(){
   localStorage.clear();
   sessionStorage.removeItem('auth-user');
   return this.http.post(`${this.logoutUrl}`,httpOptions)
  }

  getOrders() {
  let account=JSON.parse((localStorage.getItem('auth')||'{}'))
    let id=account.data.id
    return this.http.get(this.baseUrl+id)
  }


}
