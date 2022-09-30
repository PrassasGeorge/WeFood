import { StoreItemComponent } from './components/store-item/store-item.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Contact-us', component:ContactUsComponent},
  {path:'Cart' , component:CartComponent},
  {path:'User' , component:UserComponent},
  {path:'Register' , component:RegisterComponent},
  {path:'Log-in' , component:LogInComponent},
  {path:'Store-item' , component:StoreItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
