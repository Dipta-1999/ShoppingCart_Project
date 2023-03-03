import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/Shared/header/header.component';
import { FooterComponent } from './Component/Shared/footer/footer.component';
import { NavComponent } from './Component/Shared/nav/nav.component';
import { ShopingCartComponent } from './Component/shoping-cart/shoping-cart.component';

import { ProductListComponent } from './Component/shoping-cart/product-list/product-list.component';
import { CartComponent } from './Component/shoping-cart/cart/cart.component';
import { CartItemsComponent } from './Component/shoping-cart/cart/cart-items/cart-items.component';
import { ProductItemsComponent } from './Component/shoping-cart/product-list/product-items/product-items.component';
import { WishlistComponent } from './Component/shoping-cart/wishlist/wishlist.component';
import { WishlistItemsComponent } from './Component/shoping-cart/wishlist/wishlist-items/wishlist-items.component';
//import { ProductDetailsBuyComponent } from './Component/backend/product-details-buy/product-details-buy.component';
import { HttpClientModule } from '@angular/common/http';
import { BuyProductComponent } from './Component/shoping-cart/buy-product/buy-product.component'
import { Route } from '@angular/router';
import { Router } from '@angular/router';
// import { UserLogComponent } from './buy-product/user-log/user-log.component';
import { BuyProductItemComponent } from './Component/shoping-cart/buy-product/buy-product-item/buy-product-item.component';
import { UserLogComponent } from './Component/Shared/nav/user-log/user-log.component';
import { UserRegisterComponent } from './Component/Shared/nav/user-register/user-register.component';
import { PageNotFoundComponent } from './Component/Shared/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginsuccessComponent } from './Component/Shared/nav/loginsuccess/loginsuccess.component';
import { UserRegistrationService } from './service/user-registration.service';
import { NikonComponent } from './Component/Shared/nav/nikon/nikon.component';
import { NikonItemsComponent } from './Component/Shared/nav/nikon/nikon-items/nikon-items.component';
import { CanonComponent } from './Component/Shared/nav/canon/canon.component';
import { CanonItemsComponent } from './Component/Shared/nav/canon/canon-items/canon-items.component';
import { ProfileComponent } from './Component/Shared/nav/profile/profile.component';
import {MatCardModule} from '@angular/material/card';
import { FilterComponent } from './Component/shoping-cart/filter/filter.component';
import { ForgotPasswordComponent } from './Component/Shared/nav/forgot-password/forgot-password.component';
import { MyOrderComponent } from './Component/shoping-cart/my-order/my-order.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewDetailsComponent } from './Component/shoping-cart/view-details/view-details.component';
import { NgToastModule } from 'ng-angular-popup';
import { PaymentDetailsComponent } from './Component/shoping-cart/cart/cart-items/payment-details/payment-details.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SonyComponent } from './Component/Shared/nav/sony/sony.component';
import { SonyItemsComponent } from './Component/Shared/nav/sony/sony-items/sony-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShopingCartComponent,
    ProductListComponent,
    CartComponent,
    CartItemsComponent,
    ProductItemsComponent,
    WishlistComponent,
    WishlistItemsComponent,

    BuyProductComponent,
    UserLogComponent,
    BuyProductItemComponent,
    UserRegisterComponent,
    PageNotFoundComponent,
    LoginsuccessComponent,
    NikonComponent,
    NikonItemsComponent,
    CanonComponent,
    CanonItemsComponent,
    ProfileComponent,

    FilterComponent,
    ForgotPasswordComponent,
    MyOrderComponent,
    ViewDetailsComponent,
    PaymentDetailsComponent,
    SonyComponent,
    SonyItemsComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxPaginationModule,
    NgToastModule,
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
