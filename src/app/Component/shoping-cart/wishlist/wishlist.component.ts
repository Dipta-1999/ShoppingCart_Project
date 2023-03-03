import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/models/product-details';
import { User } from 'src/app/models/user';
import { WishlistItem } from 'src/app/models/wishlist-item';
import { MessengerService } from 'src/app/service/messenger.service';
import { MessengerwishService } from 'src/app/service/messengerwish.service';
//import { Product } from 'src/app/models/product';

import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  @Input() user!:User
  wishItems: WishlistItem[]=[];
 // wishTotal = 0
  constructor(private msg: MessengerService,
    private wishservice: WishlistService,
    private msgwish: MessengerwishService) { }

  ngOnInit(){
    this.handleSubscription();
    this.loadWishlistItem();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product:any) => {
      //this.wishItems=product
      this.loadWishlistItem();
    })
  }

  loadWishlistItem() {
    this.user=JSON.parse(localStorage.getItem('token')!)
    this.wishservice.getWishlist(this.user).subscribe((items: WishlistItem[]) => {
      this.wishItems = items;

      //this.calcWishlistTotal();
      //console.log(this.wishItems)
    })
    //this.msg.sendMsg(this.wishItems);
  }
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }

}
