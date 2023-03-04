import { Component, OnInit, Input } from '@angular/core';
import { WishlistItem } from 'src/app/models/wishlist-item';
import { MessengerService } from 'src/app/service/messenger.service';
import { MessengerwishService } from 'src/app/service/messengerwish.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist-items',
  templateUrl: './wishlist-items.component.html',
  styleUrls: ['./wishlist-items.component.css']
})
export class WishlistItemsComponent implements OnInit {

  @Input() wishItem: any

  constructor(private wishservice: WishlistService, private msg: MessengerService, private msgwish: MessengerwishService) { }

  ngOnInit(): void {
    //this.msg.getMsg();
  }

  handleRemoveFromWishlist(wish:WishlistItem) {
    this.wishservice.deleteProductFromWishlist(wish.id).subscribe((data:any) => {
      this.wishItem=data;
      
      console.log(this.wishItem)
    })
    this.msg.sendMsg(this.wishItem)
    
  }
}
