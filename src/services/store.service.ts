import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private URL = environment.baseUrl + "/stores";

  constructor(private http: HttpClient) {
  }

  //Get all stores
  getStores() {
    return this.http.get(this.URL)
  }

  //Get stores by id
  getStore(id: number) {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);

    return this.http.get(this.URL, {params: queryParams});
  }

  //Get Products By store id
  getProductsByStore(id: number) {
    console.log(id);
    return this.http.get(`${this.URL}/${id}/products`);
  }

  //Get all store categories
  getStoreCategories() {
    return this.http.get(this.URL + "/storeCategories");
  }

  //Get stores by category
  getStoresByCategory(id: number) {
    return this.http.get(this.URL + "/categories/" + id);
  }

  //Initiate new order
  Initiate(store: any, account: any) {
    let queryParams = new HttpParams();
    queryParams = queryParams.set("store", store)
                             .set("account", account = 1)

    return this.http.get(this.URL + "/initiate", {params: queryParams});
  }

  //Get all popular Stores
  getPopularStores() {
    return this.http.get(this.URL + "/popular")
  }

  //Get top 10 products
  mostPopularProducts() {
    return this.http.get(this.URL + "/popular/products")
  }

  //Get most popular stores in general
  mostPopularStoresInGeneral() {
    return this.http.get(this.URL + "/popular")
  }

  //Get all popular stores by category id
  PopularStoresByCategory(id: number) {
    return this.http.get(this.URL + "/popular/categories/" + id);
  }

  //Search stores by name
  GetStoresByName(name:string){
    return this.http.get(this.URL + "/search?searchString="+ name )
  }
}
