import { Component, NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLogComponent } from './Component/Shared/nav/user-log/user-log.component';
import { UserRegisterComponent } from './Component/Shared/nav/user-register/user-register.component';
import { ShopingCartComponent } from './Component/shoping-cart/shoping-cart.component';
import { PageNotFoundComponent } from './Component/Shared/page-not-found/page-not-found.component';
import { LoginsuccessComponent } from './Component/Shared/nav/loginsuccess/loginsuccess.component';
import { NikonComponent } from './Component/Shared/nav/nikon/nikon.component';
import { CanonComponent } from './Component/Shared/nav/canon/canon.component';
import { ProfileComponent } from './Component/Shared/nav/profile/profile.component';
import { ForgotPasswordComponent } from './Component/Shared/nav/forgot-password/forgot-password.component';
import { MyOrderComponent } from './Component/shoping-cart/my-order/my-order.component';
import { ViewDetailsComponent } from './Component/shoping-cart/view-details/view-details.component';
import { AuthGuard } from './auth/auth.guard';
import { PaymentDetailsComponent } from './Component/shoping-cart/cart/cart-items/payment-details/payment-details.component';
import { SonyComponent } from './Component/Shared/nav/sony/sony.component';

//import { UserLogComponent } from './buy-product/user-log/user-log.component';
//import { UserLogComponent } from './Component/Shared/nav/user-log/user-log.component';

const routes: Routes = [
  {path: '', redirectTo: '/registration', pathMatch: 'full'},
  {path:'myOrder', component:MyOrderComponent},
  {path:'forgotPassword', component:ForgotPasswordComponent},
  {path: 'registration', component: UserRegisterComponent},
  {path: 'login', component: UserLogComponent},
  {path: 'logout', component: UserLogComponent},
  {path: 'shop', canActivate:[AuthGuard], component: ShopingCartComponent},
  {path: 'userloginsuccess', component: LoginsuccessComponent},
  {path: 'nikon', component: NikonComponent},
  {path: 'canon', component: CanonComponent},
  {path: 'sony', component:SonyComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'viewDetails', component:ViewDetailsComponent},
  {path: 'payment', component:PaymentDetailsComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents =  [UserLogComponent]
