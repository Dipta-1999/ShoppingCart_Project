import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  // registerUserFromRemote(user: User) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient, private router: Router) { }
  isLoggedIn = new BehaviorSubject(false);

  public loginUserFromRemote(user: User):Observable<any>
  {
    return this.http.post<any>("http://localhost:9190/loginUsers",user);
  }
  public registerUserFromRemote(user: User):Observable<any>
  {
    return this.http.post<any>("http://localhost:9190/registerUsers",user);
  }
  // public showUser(user: User):Observable<any>
  // {
  //   return this.http.get<any>("http://localhost:9190/users",user.emailId);
  // }
  public changePasswordUser(user: User)
  {
    return this.http.put("http://localhost:9190/updatePsssword",user)
  }

  public loggedinUser()
  {
    this.isLoggedIn.next(true);

  }
  public logoutUser()
  {
    localStorage.removeItem('token')
    //this.router.navigate(['/'])
    this.isLoggedIn.next(false);
  }
  public getToken()
  {
    return localStorage.getItem('token')
  }

}
