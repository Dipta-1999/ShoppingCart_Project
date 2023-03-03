import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { MessengerService } from 'src/app/service/messenger.service';
import { UserRegistrationService } from 'src/app/service/user-registration.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  user_det: User[]=[];
  user= new User();

  constructor(private user_service: UserRegistrationService, 
    private router: Router, 
    private msg: MessengerService) { }
    private  mes = ' ';

  ngOnInit(){
    this.showUser()  
  }
  showUser()
  {
        // this.user_service.showUser(this.user).subscribe(
        //    this.mes=this.user.userName
        // );
  }
    
} 
