import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order:any;
  account:any;
  store:any;
  id!:number;
  quantity!:number;

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {

this.AddItemHandler();

  }



  AddItemHandler(){
    this.orderService.AddItem(this.id , this.quantity).subscribe({
        next: (response: any) => this.order = response,
        error: (error: any) => console.log(error),
        complete: () => console.log("petuxe")
  })
}

}
