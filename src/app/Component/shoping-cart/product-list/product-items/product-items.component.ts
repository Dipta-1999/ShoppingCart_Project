import { Router } from '@angular/router';
import { ProductDetails } from 'src/app/models/product-details';
import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/service/messenger.service'
import { CartService } from 'src/app/service/cart.service'
import { WishlistService } from 'src/app/service/wishlist.service';
import { CartItem } from 'src/app/models/cart-item';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/service/product.service';
import { ViewDetailsService } from 'src/app/service/view-details.service';
import { ViewDetails } from 'src/app/models/view-details';


@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

  @Input() productItem!: ProductDetails;
  @Input() user!: User;
  @Input()  addedToWishlist!: boolean;
  @Input() viewDetail!: ViewDetails
  vd:ViewDetails = new ViewDetails();
  p!:number
  add:boolean=true;
  rem: boolean=false;

  //enableZoom: Boolean = true;

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private productService: ProductService,
    private viewDetailsService: ViewDetailsService,
    private router: Router,
  ) { }


  ngOnInit() {


  }

  handleAddToCart() {
    this.user=JSON.parse(localStorage.getItem('token')!)
    this.cartService.addProductToCart(this.productItem,this.user).subscribe(() => {
      this.msg.sendMsg(this.productItem)
      console.log(this.productItem)
    })
  }

  handleAddToWishlist() {
    this.user=JSON.parse(localStorage.getItem('token')!)
    this.wishlistService.addToWishlist(this.productItem, this.user).subscribe(() => {

      //this.addedToWishlist=true;
      this.add=false;
      this.rem=true;
      this.msg.sendMsg(this.productItem)
      //this.rem=true;
      //this.add=true;
      console.log(this.productItem)
    })


  }

  handleRemoveFromWishlist() {
    this.wishlistService.deleteProductFromWishlist(this.productItem.id).subscribe((data:any) => {

      this.add=true;

      this.rem=false;
      this.msg.sendMsg(this.productItem)
    })
    this.msg.sendMsg(this.productItem)
  }

  viewDetails()
  {
    this.vd.id=this.productItem.id;
    this.vd.imgurl=this.productItem.imgurl;
    this.vd.name=this.productItem.name;
    this.vd.price=this.productItem.price;
    this.vd.quantity=this.productItem.quantity;
    this.productService.getProductsDetails(this.productItem.id).subscribe((data: any)=>
    {
      //localStorage.setItem('token', JSON.stringify(data))
      this.productItem=data;
      this.viewDetailsService.set_viewDetails(this.vd);
      localStorage.setItem('viewdet', JSON.stringify(data))
      this.router.navigate(['/viewDetails'])
      console.log(this.productItem);

    })
  }
}
