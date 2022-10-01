import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CartService {

private baseUrl = environment.baseUrl+'/orders';

  constructor(private http:HttpClient) { }

  cartProducts: any[] =[];
  newOrder: any;

  initiateOrder(store: number, account: number) {
    let queryParams = new HttpParams();
    queryParams= queryParams.set("store",store)
      .set("account",account);
    return this.http.get(this.baseUrl+"/initiate?store="+store+'&account='+account);

  }

  addItem(id:string,quantity:number){
    let queryParams =new HttpParams();


    queryParams= queryParams.set("id",id)
    .set("quantity",quantity);

    let url = (this.baseUrl+"/addItem?id="+id+'&&quantity='+quantity);

    return this.http.patch(url,null)
  }

  updateItem(id:string,quantity:number){


    let queryParams =new HttpParams();


    queryParams= queryParams.set("id",id)
      .set("quantity",quantity);

    let url = (this.baseUrl+"/addItem?id="+id+'&quantity='+quantity);

    return this.http.patch(url,null)
  }

  deleteItem(id:string){
    let queryParams =new HttpParams();


    queryParams= queryParams.set("id",id);

    let url = (this.baseUrl+"/deleteItem?id="+id);

    return this.http.delete(url)
  }

  checkout(paymentMethod:string){

    let queryParams = new HttpParams();
    queryParams = queryParams.set("paymentMethod",paymentMethod)

    return this.http.post(this.baseUrl+"/checkout?paymentMethod="+paymentMethod,null)
  }

  addToCart(item : any) {
   this.cartProducts.push(item);
   localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  getCart(){

      return  (localStorage.getItem("cart")||'{}');
  }

  getOrder(){
    return (localStorage.getItem("newOrder")||'{}');
  }
}
