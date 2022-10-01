import { StoreService } from 'src/services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.css']
})
export class PopularProductsComponent implements OnInit {

  popularProducts:any;

  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    this.getMostPopularProducts()
  }

  getMostPopularProducts(){
    this.storeService.mostPopularProducts().subscribe({
      next: (response: any) => this.popularProducts = response,
      error: (error: any) => console.log(error),
      complete: () => console.log("petuxe")
    })
  }
}
