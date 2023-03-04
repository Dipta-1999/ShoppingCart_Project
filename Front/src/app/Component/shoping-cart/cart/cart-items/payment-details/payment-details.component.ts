import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { MyOrderServiceService } from 'src/app/service/my-order-service.service';
import { MessengerOrderService } from 'src/app/service/messenger-order.service';
import { ProductDetails } from 'src/app/models/product-details';
import { User } from 'src/app/models/user';
import { CartItem } from 'src/app/models/cart-item';
import { MyOrder } from 'src/app/models/my-order';
import { CartService } from 'src/app/service/cart.service';
import { MessengerService } from 'src/app/service/messenger.service';
import { Router } from '@angular/router';
//import { Headers} from '@angular/http';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  //http: any;
  @Input() cartItem: any
  p!: ProductDetails
  user!:User
  cart!:CartItem
  car:any
  ord!: MyOrder
  money=0;
  or!:any
  dte:Date = new Date();

  constructor(private cartService: CartService,
    private msg: MessengerService,
    private ordservice: MyOrderServiceService,
    private msgord:MessengerOrderService,
    private router: Router) { }

  ngOnInit(): void {

  }
  myOrder:MyOrder=new MyOrder();

  // addOrder()
  // {
  //   this.msg.getMsg().subscribe((data)=>{
  //     this.car=data;
  //     console.log(this.car);
  //   })
  //     this.myOrder.id=this.randomNumber(0,1999);
  //     this.myOrder.cartId=this.cartItem.id;
  //     this.myOrder.price=(this.cartItem.price * this.cartItem.quantity);
  //     this.myOrder.productId=this.cartItem.product_id;
  //     this.myOrder.product_name=this.cartItem.name;
  //     this.myOrder.quantity=this.cartItem.quantity;
  //     this.myOrder.userId=this.cartItem.userId;

  //     this.ordservice.addOrderx(this.myOrder).subscribe((order)=>{
  //       this.or=order
  //       this.msgord.setMyOrder(this.or);
  //       console.log(this.or);
  //       //this.money=0;
  //     })

  //   console.log(this.or)
  // }
  // randomNumber(min:number, max:number) {
  //   return Math.floor(Math.random() * (max - min) + min);
  // }

  chargeCreditCard() {
    // let form = document.getElementsByTagName("form")[0];
    // (<any>window).Stripe.card.createToken({
    //   number: form['cardNumber'].value,
    //   exp_month: form['expMonth'].value,
    //   exp_year: form['expYear'].value,
    //   cvc: form['cvc'].value
    // }, (status: number, response: any) => {
    //   if (status === 200) {
    //     let token = response.id;
    //     this.chargeCard(token);
    //   } else {
    //     console.log(response.error.message);
    //   }
    // });
  }
  //token:any
  chargeCard(token: string) {

    // const headers = new HttpHeaders({'token': token, 'amount': '100'});
    // this.http.post('http://localhost:8080/payment/charge', {}, {headers: headers})
    //   .subscribe((resp: any) => {
    //     console.log(resp);
    //   })
  }
}
