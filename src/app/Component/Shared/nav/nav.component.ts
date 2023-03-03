import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/service/product.service';
import { UserRegistrationService } from 'src/app/service/user-registration.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // registration!: any[];
  public searchTerm: string = ' ';
  @Input() use!: User;
  user =new User();
  token: string ='';
  u:any;
  constructor(public user_service: UserRegistrationService,  private router: Router, private productService:ProductService){}
  //constructor() {}
  loginStatus: boolean = false;
  ngOnInit() {

    this.user_service.isLoggedIn.subscribe((status) => {
      this.loginStatus = status;
    });
    this.u=JSON.parse(localStorage.getItem('token')!)

  }
  login() {
    this.user_service.loggedinUser();
    //localStorage.setItem(this.token, JSON.stringify(this.user.userName))

      //error =>{
        //alert("exception occured");
        //this.msg="Bad Credentials, please enter valid emailId with correct password";  }
  }
  logout(): void {
    this.user_service.logoutUser()
  }
  showUser()
  {
    return JSON.parse(localStorage.getItem('token')!)
    // var obj = JSON.parse(localStorage.getItem('token')!)
    // return obj;

  }



}

