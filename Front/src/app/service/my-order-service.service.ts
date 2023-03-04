import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartComponent } from '../Component/shoping-cart/cart/cart.component';
import { Demo } from '../Demo/Class/demo';
import { CartItem } from '../models/cart-item';
import { MyOrder } from '../models/my-order';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MyOrderServiceService {

  constructor(private http:HttpClient) { }
  // public addOrder(user: User, cart:CartItem):Observable<any>
  // {
  //   return this.http.post<any>("http://localhost:9190/addOrder"+user.id,cart);
  // }



  public addOrderx(myOrder:MyOrder):Observable<MyOrder>
  {
    return this.http.post<MyOrder>("http://localhost:9190/addOrder",myOrder);
  }

  public getOrder(userId: number):Observable<MyOrder[]>
  {
    console.log(userId)
    return this.http.get<MyOrder[]>("http://localhost:9190/myOrders/"+userId);
  }

  // public getOrderx():Observable<MyOrder[]>
  // {
  //   return this.http.get<MyOrder[]>("http://localhost:9190/myOrderHistory");
  // }
}
