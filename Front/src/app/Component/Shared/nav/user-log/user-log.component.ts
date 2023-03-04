import { Component, ContentChild, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserRegistrationService } from 'src/app/service/user-registration.service';
import { FormBuilder } from '@angular/forms';
import { Validator } from '@angular/forms';
import { DemoSharedService } from 'src/app/Demo/demo-shared.service';
import { MessengerOrderService } from 'src/app/service/messenger-order.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent implements OnInit {

  show: boolean = false;



  msg = ' ';
  user =new User();
  profile:User=new User()
  id!:number;
  public showPassword: boolean = false;
  constructor(
    private user_service: UserRegistrationService,
    private demoSharedService:DemoSharedService,
    private msgord: MessengerOrderService,
    private toast: NgToastService,
    private router: Router) { }

  ngOnInit() {

  }
  Password() {
    this.show = !this.show;
  }
  loginUser()
  {
    this.user_service.loginUserFromRemote(this.user).subscribe(
      data =>{
                this.toast.success({detail:"Great!!",summary:'Successfully You have Logged In!!',duration:5000});
                localStorage.setItem('token', JSON.stringify(data))
                this.router.navigate(['/shop'])
                this.profile=data;
                console.log(this.profile.id)
                this.id=this.profile.id;
                this.msgord.set_userId(this.id);
                console.log(this.id);
              } ,
      error =>{
        //alert("exception occured");
        this.msg="Please enter correct details!!";
        this.toast.error({detail:"Wrong Input!!",summary:this.msg,sticky:true});
      }

    );
    this.id=this.profile.id;
    this.msgord.set_userId(this.id)
  }
}


