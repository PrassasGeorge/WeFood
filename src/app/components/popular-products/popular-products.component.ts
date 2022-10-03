import { StoreService } from 'src/services/store.service';
import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.css']
})
export class PopularProductsComponent implements OnInit {

  popularProducts:any;
  newOrder:any;

  constructor(private storeService:StoreService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getMostPopularProducts()
  }

  getMostPopularProducts(){
    this.storeService.mostPopularProducts().subscribe({
      next: (response: any) => this.popularProducts = response,
      error: (error: any) => console.log(error),
      complete: () => console.log("petuxe")
    })
  }

  getStoreId(storeId:any){
    let acc=JSON.parse(localStorage.getItem('auth')||'{}');
    let account= acc.data.id;
    this.initiateOrder(storeId, account) ;
  }

  initiateOrder(store: any, account: any) {
    this.cartService.initiateOrder(store, account).subscribe(
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
}
