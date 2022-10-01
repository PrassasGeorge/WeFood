import { StoreService } from 'src/services/store.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  stores:any;
  storesById:any;
  account:any;
  store:any;
  newOrder:any;
  pByS:any;

  constructor(private storeService:StoreService,private cartS:CartService) { }

  ngOnInit(): void {
    this.getAllStores()

  }

  productsByStore(id:any){
    this.storeService.getProductsByStore(id)
    .subscribe(response=>{
      this.pByS = response;
    });
  }

  getAllStores(){
    this.storeService.getStores().subscribe(
      {
        next: (response: any) => this.stores = response,
        error: (error: any) => console.log(error),
        complete: () => console.log("init")
      }
    )
  }

  // getStoreById(id:number){
  //   this.storeService.getStore(id).subscribe({
  //     next: (response: any) => this.storesById = response,
  //       error: (error: any) => console.log(error),
  //       complete: () => console.log("petuxe")
  //   })
  // }

  getStoreId(storeId:any){
    let acc=JSON.parse(localStorage.getItem('auth')||'{}');
    let account= acc.data.id;
    this.initiateOrder(storeId, account) ;
  }

  initiateOrder(store: any, account: any) {
    this.cartS.initiateOrder(store, account).subscribe(
      {
        next:(response: any) => {
          this.newOrder = response;
          localStorage.setItem('newOrder', JSON.stringify(this.newOrder));
        },
        error: (error: any) => console.log(error),
        complete: () => console.log(this.newOrder)
      }
    );
  }

  // getPopularStores(){

  // }

}
