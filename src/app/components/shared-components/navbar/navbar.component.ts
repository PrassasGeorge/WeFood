import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/services/store.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  stores:any;
  constructor( private storeService:StoreService) { }


  ngOnInit(): void {
    this.searchStoresByCategory();
    this.initiation();
  }

searchStoresByCategory(){
  this.storeService.getStoreCategories().subscribe({
    next: (response: any) => this.stores = response,
    error: (error: any) => console.log(error),
    complete: () => console.log("petuxe")
})
}

reload(){
    window.location.reload();
}

  init: any;
  loggedIn:any;

  initiation(){
    this.init = localStorage.getItem('auth')||'{}';
    if(this.init != '{}'){
      this.loggedIn = this.init;
    }
    else {
      this.loggedIn= null;
    }
  }
}


