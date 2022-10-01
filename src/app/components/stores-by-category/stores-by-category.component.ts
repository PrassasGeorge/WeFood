import { StoreService } from 'src/services/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stores-by-category',
  templateUrl: './stores-by-category.component.html',
  styleUrls: ['./stores-by-category.component.css']
})
export class StoresByCategoryComponent implements OnInit {

id!:number;
stores:any;

  constructor(private StoreService:StoreService ,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next : par => this.id = par['id']
    });

    this.storesByCategory(this.id);
  }

  storesByCategory(id:any){
    this.StoreService.getStoresByCategory(id).subscribe({
      next: (response: any) => this.stores = response,
      error: (error: any) => console.log(error),
      complete: () => console.log("petuxe")
  })
  }

}
