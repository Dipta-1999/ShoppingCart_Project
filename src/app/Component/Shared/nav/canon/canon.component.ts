import { Component, OnInit } from '@angular/core';
import { Canon } from 'src/app/models/canon';
import { CanonService } from 'src/app/service/canon.service';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-canon',
  templateUrl: './canon.component.html',
  styleUrls: ['./canon.component.css']
})
export class CanonComponent implements OnInit {

  productDetails!:Canon[]

  constructor(private msg: MessengerService, private productService: CanonService) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  getProducts()
  {
    this.productService.getCanonProducts().subscribe((data: any[])=>{
     
      this.productDetails=data;
    });
  }
  loadProducts() {
    this.productService.getCanonProducts().subscribe((products): void => {
      this.productDetails = products;
    })
  }

}
