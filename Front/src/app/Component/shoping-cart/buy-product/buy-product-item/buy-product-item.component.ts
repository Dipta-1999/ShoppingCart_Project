import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buy-product-item',
  templateUrl: './buy-product-item.component.html',
  styleUrls: ['./buy-product-item.component.css']
})
export class BuyProductItemComponent implements OnInit {
@Input() buyProductItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}
