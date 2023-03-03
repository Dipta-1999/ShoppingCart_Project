import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserRegistrationService } from 'src/app/service/user-registration.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  msg = ' ';
  user =new User();
  public showPassword1: boolean = false;
  public showPassword2: boolean = false;
  constructor(
    private user_service: UserRegistrationService,
    private toast: NgToastService,
    private router: Router) { }

  ngOnInit(): void {
  }

  registerUser()
  {
    this.user_service.registerUserFromRemote(this.user).subscribe(
      data =>{
                //alert("Registration Successful");
                this.toast.success({detail:"Great!!", summary:'Registration Successful!!',duration:5000})
                this.msg="Registration Successful";
                this.router.navigate(['/login'])
              } ,
      error =>{
        //alert("exception oc");
        this.msg="Already have an account";
        this.toast.error({detail:"Duplicate Account!!",summary:this.msg, duration:5000})
      }
    );
  }

}
