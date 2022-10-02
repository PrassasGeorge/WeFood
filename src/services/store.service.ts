import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private URL = environment.baseUrl + "/stores";

  constructor(private http: HttpClient) { }

  //Get all stores
  getStores(){
    return this.http.get(this.URL)
  }

  //Get stores by id
  getStore(id:number){

    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);

    return this.http.get(this.URL, {params:queryParams});
  }

  //Get Products By store id
  getProductsByStore(id:number){
    console.log(id);
    return this.http.get(`${this.URL}/${id}/products`);
  }

  //Get all store categories
  getStoreCategories(){
    return this.http.get(this.URL + "/storeCategories");
  }

  //Get stores by category
  getStoresByCategory(storeCategories:any){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("storeCategories", storeCategories);

    return this.http.get(this.URL + "/storeCategories", {params:queryParams});
  }

// //search by store category
//   search(searchString:string){

//     let queryParams = new HttpParams();
//     queryParams = queryParams.append("searchString", searchString);

//     return this.http.get(this.URL + "/search", {params:queryParams});
//   }

  //Initiate new order
  Initiate(store:any,account:any){
    let queryParams = new HttpParams();
    queryParams = queryParams.set("store", store)
                             .set("account" , account=1)

    return this.http.get(this.URL + "/initiate", {params:queryParams});
  }

  getPopularStores(){
    return this.http.get(this.URL + "/popular")
  }


  mostPopularProducts(){
    return this.http.get(this.URL + "/popular/products")
  }

  mostPopularStoresInGeneral(){
    return this.http.get(this.URL + "/popular")
  }

  // mostPopularStoresPerCategory(){
  // let queryParams= new HttpParams();
  // queryParams = queryParams.set("category", category)
  // return this.http.get(this.URL + "/")
  // }


   //Get stores by id
   PopularStoresByCategory(id:number){
    return this.http.get(this.URL +"/popular/categories/" + id);
  }

 }

