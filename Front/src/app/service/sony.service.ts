import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sony } from '../models/sony';

@Injectable({
  providedIn: 'root'
})
export class SonyService {

  constructor(private http:HttpClient) { }
  public getSonyProducts(): Observable<Sony[]>
  {
    return this.http.get<Sony[]>("http://localhost:9190/sonys")
  }
}
