import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { wishlistUrl } from 'src/app/config/api';
import { ProductDetails } from '../models/product-details';
import { Observable } from 'rxjs';
import { WishlistItem } from '../models/wishlist-item';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  addToWishlist(product: ProductDetails, user:User): Observable<Object> {
    return this.http.post<Object>("http://localhost:9190/addWishlist/"+user.id,product);
  }
  getWishlist(user:User):Observable<WishlistItem[]> {
    return this.http.get<WishlistItem[]>("http://localhost:9190/wishlist/"+user.id)
  }

  deleteProductFromWishlist(pid:number)
  {
    return this.http.delete<WishlistItem[]>("http://localhost:9190/deleteWishlist/"+pid)
  }

  // removeFromWishlist(productId: number) {
  //   return this.http.delete(wishlistUrl + '/' + productId);
  // }
}