
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CartService} from "../../../services/cart.service";
import {StoreService} from "../../../services/store.service";

@Component({
  selector: 'app-stores-by-category',
  templateUrl: './stores-by-category.component.html',
  styleUrls: ['./stores-by-category.component.css']
})
export class StoresByCategoryComponent implements OnInit {

id!:number;
stores:any;
newOrder:any;
pstores:any;

  constructor(private StoreService:StoreService ,private route:ActivatedRoute,private cartS:CartService ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next : par => this.id = par['id']
    });

    this.storesByCategory(this.id);
    this.PopularStoresByCategory(this.id);
  }

  reload(){
    window.location.reload();
  }
  storesByCategory(id:any){
    this.StoreService.getStoresByCategory(id).subscribe({
      next: (response: any) =>{
        this.stores = response
      },
      error: (error: any) => console.log(error),
      complete: () => {
        console.log("petuxe")
      }
  })
  }

  PopularStoresByCategory(id:any){
    this.StoreService.PopularStoresByCategory(id).subscribe({
      next: (response: any) => this.pstores = response,
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

}
