import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Demo } from 'src/app/Demo/Class/demo';
import { CartItem } from 'src/app/models/cart-item';
import { MyOrder } from 'src/app/models/my-order';
import { ProductDetails } from 'src/app/models/product-details';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/service/cart.service';
import { MessengerOrderService } from 'src/app/service/messenger-order.service';
import { MessengerService } from 'src/app/service/messenger.service';
import { MyOrderServiceService } from 'src/app/service/my-order-service.service';
import { NgToastService } from 'ng-angular-popup';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  //ci!:CartItem[]
  @Input() cartItem: any
  p!: ProductDetails
  user!:User
  cart!:CartItem
  ord!: MyOrder
  money:boolean=false;
  or!:any
  dte:Date = new Date();

  handler:any = null;

  constructor(
    private cartService: CartService,
    private msg: MessengerService,
    private ordservice: MyOrderServiceService,
    private msgord:MessengerOrderService,
    private toast: NgToastService,
    private router: Router)
    { }

    //demo:Demo=new Demo();
    myOrder:MyOrder=new MyOrder();
  ngOnInit(){
    //console.log(this.cartItem)
    //this.loadStripe();

  }


  handleRemoveFromCart(cart:CartItem) {
    this.cartService.deleteProductFromCart(cart.id).subscribe((data:any) => {
      this.cartItem=data;
      //console.log(this.cartItem)
    })
    this.msg.sendMsg(cart.id);
  }

  addOrder()
  {

      this.myOrder.id=this.randomNumber(0,999);
      this.myOrder.cartId=this.cartItem.id;
      this.myOrder.price=(this.cartItem.price * this.cartItem.quantity);
      this.myOrder.productId=this.cartItem.product_id;
      this.myOrder.product_name=this.cartItem.name;
      this.myOrder.quantity=this.cartItem.quantity;
      this.myOrder.userId=this.cartItem.userId;
      //this.myOrder.date=this.dte.setDate(this.dte.getDate()+1);
      //if(this.money===1)
      //{
      this.ordservice.addOrderx(this.myOrder).subscribe((order)=>{
        this.or=order
        //if(this.money==false){
          this.msgord.setMyOrder(this.or);
          console.log(this.or);
        //}

        //this.money=0;
      })

  }


  randomNumber(min:number, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  pay(amount:any) {
    toast: NgToastService
    console.log(this.money);
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      //key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.

        console.log(token)
        this.money=1;
        //this.addOrder();
        console.log(this.money);
        //this.toast.success({detail:"Great!!",summary:'Successfully Ordered!!',duration:5000});
        alert('Successfully Ordered!!');
      }


    },

    );
    handler.open({
      name: 'Camera Bazar',
      description: '2 widgets',
      amount: amount * 100
    });
    if(this.money==false){
      this.addOrder();
    }
    else{
      alert("Payment Yet to complete")
    }
    // this.router.navigate(['/myOrder'])
  }


  loadStripe()
  {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";

      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          //key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.

            console.log(token)
            alert('Payment Successful!!');
          }
        });


      }
      //if()
      this.money=true


      window.document.body.appendChild(s);

    }

  }
}
