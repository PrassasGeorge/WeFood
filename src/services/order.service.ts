import { HttpClient , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL = environment.baseUrl + "/orders";

  constructor(private http :HttpClient) { }




//Add item to order
  AddItem(id:number , quantity:number){
    let queryParams = new HttpParams();
    queryParams = queryParams.set("id", id)
                             .set("quantity" , quantity)

    return this.http.get(this.URL + "/addItem", {params:queryParams});
  }
}
