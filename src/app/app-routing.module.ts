import { StoresByCategoryComponent } from './components/stores-by-category/stores-by-category.component';
import { StoreItemComponent } from './components/store-item/store-item.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { UserComponent } from './components/user/user.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularProductsComponent } from './components/popular-products/popular-products.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Contact-us', component:ContactUsComponent},
  {path:'Cart' , component:CartComponent},
  {path:'User' , component:UserComponent},
  {path:'Log-in' , component:LogInComponent},
  {path:'Store-item' , component:StoreItemComponent},
  {path:'app-popular-products' , component:PopularProductsComponent},
  {path:'Store-item/:id/products' , component:StoreItemComponent},
  {path:'StoresByCategory/:id', component:StoresByCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
