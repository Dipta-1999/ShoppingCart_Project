import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cart-item';
import { ProductDetails } from '../models/product-details';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  

  constructor(private http: HttpClient) { }

  addProductToCart(product: ProductDetails, user: User): Observable<Object> {
    return this.http.post<Object>("http://localhost:9190/addCart/"+user.id,product);
  }

  getCartItems(user: User): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())

    return this.http.get<CartItem[]>("http://localhost:9190/carts/"+user.id)
    
  }

  deleteProductFromCart(pid:number):  Observable<CartItem[]>
  {
    return this.http.delete<CartItem[]>("http://localhost:9190/deleteCart/"+pid)
  }

}