import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../services/account.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.getDetails();
  }
  orders:any;
  details:any;

  getOrders(){
    this.accountService.getOrders().subscribe(
      {
        next: (response: any) => this.orders = response,
        error: (error:any) => console.log(error),
        complete:() => console.log('Orders fetched')
      }
    )
  }

  getDetails(){
    this.accountService.getDetails().subscribe(
      {
        next: (response: any) => this.details = response,
        error: (error:any) => console.log(error),
        complete:() => console.log('Details fetched')
      }
    )
  }

  logUserOut(){
    this.accountService.logout();
  }
}
