import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models/cart-item';
//import { Product } from '../models/product';
import { ProductDetails } from '../models/product-details';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()
  constructor() { }

  sendMsg(product: any)
  {
    //console.log(product)
    this.subject.next(product)//Trigerring an event
  }

  getMsg()
  {
    return this.subject.asObservable()
  }
  
  
}