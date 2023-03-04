import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/service/messenger.service'
//import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/service/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { ProductDetails } from 'src/app/models/product-details';
import { User } from 'src/app/models/user';
import { MessengerOrderService } from 'src/app/service/messenger-order.service';
import { MyOrder } from 'src/app/models/my-order';
import { MyOrderServiceService } from 'src/app/service/my-order-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() user!: User;
  cartItem:CartItem[]=[];
  car!: CartItem
  ord: MyOrder[]=[];
  ordd!:MyOrder
  or: any
  p: number = 1;
  cartTotal = 0

  handler:any = null;

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private msgord: MessengerOrderService,
    private ordservice: MyOrderServiceService
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItem();

  }

  handleSubscription() {
    this.msg.getMsg().subscribe((data:any) => {
      this.loadCartItem();
      localStorage.setItem('cart',JSON.stringify(data))
      //this.msgord.sendMsg(this.ord)
      this.myOrder();
    })
  }

  loadCartItem() {
    this.user=JSON.parse(localStorage.getItem('token')!)

    this.cartService.getCartItems(this.user).subscribe((items: CartItem[]) => {
      this.cartItem = items;
      this.calcCartTotal();
      //this.msgord.sendMsg(this.ord)

      //this.ordservice.addOrder(this.user.id, this.car)
      //console.log(this.cartItem)
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItem.forEach(item => {
      this.cartTotal += (item.quantity * item.price)
    });
  }
  myOrder()
  {

  }

  Readmore = false;
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }

}
