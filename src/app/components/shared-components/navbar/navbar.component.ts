
import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  stores:any=[];
  constructor( private storeService:StoreService) { }


  ngOnInit(): void {
    this.searchStoresByCategory();
  }
  


//   searchStoreHandler(searchString:string){
//     this.storeService.search(searchString).subscribe({
//         next: (response: any) => this.stores = response,
//         error: (error: any) => console.log(error),
//         complete: () => console.log("petuxe")
//   })
// }
searchStoresByCategory(){
  this.storeService.getStoreCategories().subscribe({
    next: (response: any) => this.stores = response,
    error: (error: any) => console.log(error),
    complete: () => console.log("petuxe")
})
}

}
