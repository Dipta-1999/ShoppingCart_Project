import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { MyOrder } from '../models/my-order';

@Injectable({
  providedIn: 'root'
})
export class MessengerOrderService {

  private ord: MyOrder = new MyOrder();
  private userId!: number;

  public get_userId(): number {
    return this.userId;
  }
  public set_userId(value: number) {
    this.userId = value;
  }

  public getMyOrder():MyOrder
  {
    return this.ord;
  }
  public setMyOrder(value:MyOrder)
  {
    this.ord= value;
  }
}
