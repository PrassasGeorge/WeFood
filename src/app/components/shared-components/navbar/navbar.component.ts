import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/services/store.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  stores:any;
  name!:string;
  storesS:any;
  dropDown:any;

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

SearchStoresByName(searchText:any){
    if(searchText.length<1){
      window.console.log("Please search again");
      window.location.reload();
    }
   else {
      this.storeService.GetStoresByName(searchText).subscribe({
        next: (response: any) => {
          this.storesS = response;
          this.dropDown = this.storesS;
        },
        error: (error: any) => console.log(error),
        complete: () => console.log("petuxe")
      })
    }
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

  dropDownL(){}
}


