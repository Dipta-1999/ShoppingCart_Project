import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, shareReplay, tap } from 'rxjs';

//import { Product } from '../models/product';
import { ProductDetails } from '../models/product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //public search = new BehaviorSubject<string>("");

  products:ProductDetails[]= []
  sendMsg: any;
  constructor(private http:HttpClient) { }
  public getProducts(): Observable<ProductDetails[]>
  {
    return this.http.get<ProductDetails[]>("http://localhost:9190/products")
  }
  public getProductsDetails(p: number): Observable<ProductDetails[]>
  {
    return this.http.get<ProductDetails[]>("http://localhost:9190/productById/"+p)
  }




  public getProductsFilter(start: number, end: number): Observable<ProductDetails[]>
  {
    //console.log("http://localhost:9190/filter/"+start+"/"+end);
    return this.http.get<ProductDetails[]>("http://localhost:9190/filter/"+start+"/"+end);
  }




}
