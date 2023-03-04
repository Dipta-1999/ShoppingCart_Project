import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Canon } from '../models/canon';

@Injectable({
  providedIn: 'root'
})
export class CanonService {

  constructor(private http:HttpClient) { }
  public getCanonProducts(): Observable<Canon[]>
  {
    return this.http.get<Canon[]>("http://localhost:9190/canons")
  }
}
