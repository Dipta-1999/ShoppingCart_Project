import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//import { Product } from '../models/product';
import { ProductDetails } from '../models/product-details';
@Injectable({
  providedIn: 'root'
})
export class MessengerwishService {

  subject = new Subject()
  constructor() { }
  
  sendMsg(product: ProductDetails)
  {
    //console.log(product)
    this.subject.next(product)//Trigerring an event
  }

  getMsg()
  {
    return this.subject.asObservable()
  }
}
