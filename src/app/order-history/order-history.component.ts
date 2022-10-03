import { AccountService } from '../../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  orders:any;

  getOrders(){
    this.accountService.getOrders().subscribe(
      {
        next: (response: any) => this.orders = response,
        error: (error:any) => console.log(error),
        complete:() => console.log('Orders fetched')
      }
    )
  }
}
