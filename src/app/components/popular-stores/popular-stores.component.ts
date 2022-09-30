import { StoreService } from 'src/services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-stores',
  templateUrl: './popular-stores.component.html',
  styleUrls: ['./popular-stores.component.css']
})
export class PopularStoresComponent implements OnInit {

  constructor(private StoreService:StoreService) { }

  ngOnInit(): void {
  }

}
