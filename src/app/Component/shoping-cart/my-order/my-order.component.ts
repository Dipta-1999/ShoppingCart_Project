import { Component, Input, OnInit } from '@angular/core';
import { DemoSharedService } from 'src/app/Demo/demo-shared.service';
import { CartItem } from 'src/app/models/cart-item';
import { MyOrder } from 'src/app/models/my-order';
import { User } from 'src/app/models/user';
import { MessengerOrderService } from 'src/app/service/messenger-order.service';
import { MessengerService } from 'src/app/service/messenger.service';
import { MyOrderServiceService } from 'src/app/service/my-order-service.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  user!:User
  cart!:CartItem
  ord!:MyOrder
  @Input() car!: any
  currentDate = new Date();
  constructor(
    private myOrdService: MyOrderServiceService) { }

    userId!:number;
    or:MyOrder[]=[];
    p: number = 1;

    //dte:Date = new Date();

    //console.log(dte.toString());
  ngOnInit(): void {
    this.history();

  }
  history()
  {
    this.car=JSON.parse(localStorage.getItem('token')!);
    this.userId=this.car.id;
    console.log(this.userId);

    //this.dte.setDate(this.dte.getDate());



    this.myOrdService.getOrder(this.userId).subscribe(
      (data)=>{
        this.or=data
        console.log(this.or)
        //this.or=this.msgord.getMyOrder()
      }
    )
  }

}
