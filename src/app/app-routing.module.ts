import { StoreItemComponent } from './components/store-item/store-item.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
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
  {path:'Register' , component:RegisterComponent},
  {path:'Log-in' , component:LogInComponent},
<<<<<<< HEAD
  {path:'Store-item' , component:StoreItemComponent},
  {path:'app-popular-products' , component:PopularProductsComponent}
=======
  {path:'Store-item/:id/products' , component:StoreItemComponent}

>>>>>>> 7366826c6ae34a4b24ab9266bdce8e1c5ea3e4fc
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
