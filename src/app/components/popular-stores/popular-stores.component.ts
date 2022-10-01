import { StoreService } from 'src/services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-stores',
  templateUrl: './popular-stores.component.html',
  styleUrls: ['./popular-stores.component.css']
})
export class PopularStoresComponent implements OnInit {

  popularStores:any;

  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    this.getMostPopularStores()
  }


  // get most popular stores in general

  getMostPopularStores(){
    this.storeService.mostPopularStoresInGeneral().subscribe({
      next: (response: any) => this.popularStores = response,
      error: (error: any) => console.log(error),
      complete: () => console.log("petuxe")
    })
  }

}
