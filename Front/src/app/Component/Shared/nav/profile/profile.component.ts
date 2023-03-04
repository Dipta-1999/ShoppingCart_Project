import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  @Input() users: any;

  constructor(private http:HttpClient) { }

  ngOnInit(){
    // let resp= this.http.get("http://localhost:9190/users");
    // resp.subscribe((data) => this.users=data);
    this.users= JSON.parse(localStorage.getItem('token')!);
  }

}
