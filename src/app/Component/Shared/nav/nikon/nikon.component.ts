import { Component, Input, OnInit } from '@angular/core';
import { Nikon } from 'src/app/models/nikon';
import { MessengerService } from 'src/app/service/messenger.service';
import { NikonService } from 'src/app/service/nikon.service';

@Component({
  selector: 'app-nikon',
  templateUrl: './nikon.component.html',
  styleUrls: ['./nikon.component.css']
})
export class NikonComponent implements OnInit {

  //@Input() productItem!: Nikon;
  productDetails!:Nikon[]

  //@Input()  addedToWishlist!: boolean;


  constructor(private msg: MessengerService, private productService: NikonService) { }

  ngOnInit(): any {
    this.loadProducts();
  }
  getProducts()
  {
    this.productService.getNikonProducts().subscribe((data: any[])=>{
     
      this.productDetails=data;
    });
  }
  loadProducts() {
    this.productService.getNikonProducts().subscribe((products): void => {
      this.productDetails = products;
    })
  }

}
