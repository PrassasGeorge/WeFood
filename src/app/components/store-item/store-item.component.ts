import { StoreService } from 'src/services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {

  constructor(private storeS:StoreService) { }

  storesById:any;
  products:any;

  ngOnInit(): void {
  }
  
  getStoreById(id:number){
    this.storeS.getStore(id).subscribe({
      next: (response: any) => this.storesById = response,
        error: (error: any) => console.log(error),
        complete: () => console.log("petuxe")
    })
  }

  productsByStore(id:number){
    this.storeS.getProductsByStore(id).subscribe({
      next: (response: any) => this.products = response,
        error: (error: any) => console.log(error),
        complete: () => console.log("petuxe")
    })
  }


}
