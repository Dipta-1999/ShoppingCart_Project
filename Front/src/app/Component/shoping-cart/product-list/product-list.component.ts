import { Component, Input, OnInit } from '@angular/core';

import { ProductService } from 'src/app/service/product.service';

import { ProductDetails } from 'src/app/models/product-details';
import { User } from 'src/app/models/user';
import { Filter } from 'src/app/models/filter';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //productList: Product[] =[]
  search!:string;
  filterSubscription!: Subscription;
  productDetails!: ProductDetails[]
  flist!:Filter[];
  wishlist: number[] = []
  @Input() user!: User;
  @Input() prod!:ProductDetails
  @Input() car:any
  datasource: any;
  p!: ProductDetails[]
  f!:Filter
  filterList:Filter[]=[];
  constructor(
    private productService: ProductService) {

   }//, private productDetailsService: ProductDetailsServiceService) { }
   p1!: number
   p2!: number
   filt: Filter=new Filter();


   pr1!: Filter
   pr2!: Filter

   filters: boolean=true;
   ff:boolean=true;
   reset: boolean=false;

   e: number = 1;





  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products): void => {
      this.filters = false;
      this.productDetails = products;
    })


  }
  //['use strict']:any;

  filter()
  {

    this.productService.getProductsFilter(this.p1,this.p2).subscribe(
     (data:any)=>{

        this.productDetails=data;
        console.log(this.productDetails);
        this.reset=true;
        this.ff=false;
      }
    );
  }
  resetPage()
  {
    this.loadProducts();
    this.ff=true;
    this.reset=false;
  }

}
