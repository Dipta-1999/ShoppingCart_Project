import { Component, OnInit } from '@angular/core';
import { Sony } from 'src/app/models/sony';
import { MessengerService } from 'src/app/service/messenger.service';
import { SonyService } from 'src/app/service/sony.service';

@Component({
  selector: 'app-sony',
  templateUrl: './sony.component.html',
  styleUrls: ['./sony.component.css']
})
export class SonyComponent implements OnInit {

  productDetails!:Sony[]
  constructor(private msg: MessengerService, private productService: SonyService) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  getProducts()
  {
    this.productService.getSonyProducts().subscribe((data: any[])=>{

      this.productDetails=data;
    });
  }
  loadProducts() {
    this.productService.getSonyProducts().subscribe((products): void => {
      this.productDetails = products;
    })
  }

}
