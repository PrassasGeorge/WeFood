import { OrderService } from './../../../services/order.service';
import { StoreService } from 'src/services/store.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  order:any;
  pByS:any;

  constructor(private storeService:StoreService ) { }

  ngOnInit(): void {
    this.getAllStores()
   //this.InitiateOrder();

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

  // InitiateOrder(){
  //   this.storeService.Initiate(this.account , this.store).subscribe({
  //       next: (response: any) => this.order = response,
  //       error: (error: any) => console.log(error),
  //       complete: () => console.log("petuxe")
  //   })
  // }


  getPopularStores(){
    
  }

}
