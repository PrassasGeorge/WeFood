import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared-components/navbar/navbar.component';
import { FooterComponent } from './components/shared-components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { StoreComponent } from './components/store/store.component';
import { StoreCategoryComponent } from './components/store-category/store-category.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreItemComponent } from './components/store-item/store-item.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PopularStoresComponent } from './components/popular-stores/popular-stores.component';
import {StoreService} from "../services/store.service";
import {CartService} from "../services/cart.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    ContactUsComponent,
    StoreComponent,
    StoreCategoryComponent,
    HomeComponent,
    StoreItemComponent,
    UserComponent,
    RegisterComponent,
    LogInComponent,
    PopularStoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StoreService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
