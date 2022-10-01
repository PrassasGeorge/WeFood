import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService,private route:ActivatedRoute) { }

  item:any;
  quantity: any;
  newOrder:any;
  finalOrder:any;
  paymentMethod:any;

  ngOnInit(): void {}


  order = JSON.parse(this.cartService.getOrder());



  updateItem(item:string,quantity: number){
    this.cartService.updateItem(item, quantity).subscribe(
      {
        next: (response: any) => {
          this.newOrder = response;
          localStorage.setItem('newOrder', JSON.stringify(this.newOrder));
          this.order = this.newOrder;

        },
        error: (error: any) => console.error(error),
        complete: () => console.log(this.newOrder)

      }
    )

  }

  deleteItem(item:string){
    this.cartService.deleteItem(item).subscribe(
      {
        next:(response: any) => {
          this.newOrder = response;
          localStorage.setItem('newOrder', JSON.stringify(this.newOrder));
          this.order=this.newOrder;

        },

        error: (error: any) => console.error(error),
        complete: () => console.log(this.newOrder)

      }
    )
  }

  checkout(paymentMethod:string){

    this.cartService.checkout(paymentMethod).subscribe(
      {
        next:(response:any) => {
          this.finalOrder = response;
          alert("Η Παραγγελία σου ολοκληρώθηκε! Στην πόρτα σου σε 25 λεπτά ...");

        },
        error:(error:any)=> console.log(error),
        complete: ()=> {
          console.log("Order Created");

        }

      }

    )
  }

  clearCart(){
    localStorage.removeItem('newOrder');
    this.order = null;
  }


  FinallizeOrder(){
    alert("Η Παραγγελία σου ολοκληρώθηκε! Στην πόρτα σου σε 25 λεπτά ...")
  }

}
