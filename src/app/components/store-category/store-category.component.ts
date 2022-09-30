import { StoreService } from 'src/services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-category',
  templateUrl: './store-category.component.html',
  styleUrls: ['./store-category.component.css']
})
export class StoreCategoryComponent implements OnInit {

  storesByCategory:any;
  category:any;

  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
     this.getStoreCategory(this.category);
  }


  getStoreCategory(category:any){
    this.storeService.getStoreCategories().subscribe({
      next: (response: any) => this.storesByCategory = response,
        error: (error: any) => console.log(error),
        complete: () => console.log("petuxe")
    })
  }


}
