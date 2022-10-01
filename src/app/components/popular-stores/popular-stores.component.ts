import { CartService } from './../../../services/cart.service';
import { StoreComponent } from './../store/store.component';
import { StoreService } from 'src/services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-stores',
  templateUrl: './popular-stores.component.html',
  styleUrls: ['./popular-stores.component.css']
})
export class PopularStoresComponent implements OnInit {

  popularStores:any;
  newOrder:any;
  pByS:any;


  constructor(private storeService:StoreService,private cartS:CartService ) { }

  ngOnInit(): void {
    this.getMostPopularStores()
  }


  // get most popular stores in general

  getMostPopularStores(){
    this.storeService.mostPopularStoresInGeneral().subscribe({
      next: (response: any) => this.popularStores = response,
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


  productsByStore(id:any){
    this.storeService.getProductsByStore(id)
    .subscribe(response=>{
      this.pByS = response;
    });
  }
}
