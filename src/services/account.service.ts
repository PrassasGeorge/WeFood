import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

private registerUrl= environment.baseUrl+'/accounts/register';
private loginUrl= environment.baseUrl+'/accounts/login';
private baseUrl= environment.baseUrl+'/orders/accountDto/'

  constructor(private http:HttpClient) { }

  login(username:string,password:string) {
    return this.http.get(this.loginUrl+'?email='+username+'&password='+password)
  }

  logout(){
   localStorage.clear();
  }

  getOrders() {
  let account=JSON.parse((localStorage.getItem('auth')||'{}'))
    let id=account.data.id
    return this.http.get(this.baseUrl+id)
  }
}
