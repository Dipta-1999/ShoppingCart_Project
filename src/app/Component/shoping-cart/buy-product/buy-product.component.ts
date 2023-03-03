import { Component, OnInit, Input } from '@angular/core';
import { BackProductDetailsBuyService } from 'src/app/service/back-product-details-buy.service';
import { ProductDetails } from 'src/app/models/product-details';
//import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
@Input() byProductItem: any;
//@Input() byProductItemTotal: any;

buyProductItems: any[]=[];

byProductItemTotal=0;
constructor(private buyProductService: BackProductDetailsBuyService) { }

ngOnInit()
{
  
}
  



}
