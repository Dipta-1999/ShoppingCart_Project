import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
//import { Product } from '../models/product';
import { ProductDetails } from '../models/product-details';
import { ProductListComponent } from '../Component/shoping-cart/product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})
export class BackProductDetailsBuyService {
  response: any;
  

  constructor(private http:HttpClient) 
  { }
  // public getProductList(): Observable<ProductListComponent[]> {
  //   return this.http.get<Product[]>(`api/products/v1/`);
  // }
  public getProductDetailsBuy():Observable<ProductDetails[]>
  {
    //this.response= this.http.get<ProductDetails[]>("http://localhost:9190/products");
    return this.http.get<ProductDetails[]>("http://localhost:9190/products");//this.response;

    //return this.httpClient.get<Product[]>(this.baseURL);
  }

  // getProducts(){

  //   this.product.getProducts().subscribe((data)=>{this.productList=data;});}

  productdetail: ProductDetails[] = [
    
  ];


  subject = new Subject()
  
  
  sendMsg(productdet: ProductDetails)
  {
    console.log(productdet)
    this.response//Trigerring an event
  }

  getMsg()
  {
    return this.response
  }
}

/**
 * export class MessengerService {

  subject = new Subject()
  constructor() { }

  sendMsg(product: Product)
  {
    //console.log(product)
    this.subject.next(product)//Trigerring an event
  }

  getMsg()
  {
    return this.subject.asObservable()
  }
}
 * 
 */
