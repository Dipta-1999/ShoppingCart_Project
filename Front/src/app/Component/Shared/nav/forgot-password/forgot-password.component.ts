import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserRegistrationService } from 'src/app/service/user-registration.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user =new User();
  emailId!: string
  constructor(private user_service: UserRegistrationService, private router: Router) { }

  ngOnInit(): void {
  }
  changePassword()
  {
    this.user_service.changePasswordUser(this.user).subscribe(
      data =>{
        alert("Successfully you have changed your password in!!");
        localStorage.setItem('token', JSON.stringify(data))
        this.router.navigate(['/login'])
        
      }
    )
  }

}
