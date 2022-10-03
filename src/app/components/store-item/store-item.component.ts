import { StoreService } from 'src/services/store.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../services/cart.service";


@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {

  constructor(private storeS:StoreService,private route:ActivatedRoute,private cartS:CartService) { }

  products:any;
  id!: number ;
  newOrder:any;

  ngOnInit(): void {
    this.route.params.subscribe({
      next : par => this.id = par['id']
    });

    this.productsByStore(this.id);
  }


  productsByStore(id:number){
    this.storeS.getProductsByStore(id).subscribe({
      next: (response: any) => this.products = response,
        error: (error: any) => console.log(error),
        complete: () => console.log("petuxe")
    })
  }

  addToCart(item:any){

    this.cartS.addItem(item.id,1).subscribe(
      {

        next:(response: any) => {
          this.newOrder = response;
          localStorage.setItem('newOrder', JSON.stringify(this.newOrder));
        },
        error: (error: any) => console.error(error),
        complete: () => console.log(this.newOrder)

      }
    );
  }


}
