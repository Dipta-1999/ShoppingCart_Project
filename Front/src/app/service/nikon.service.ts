import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nikon } from '../models/nikon';

@Injectable({
  providedIn: 'root'
})
export class NikonService {

  constructor(private http:HttpClient) { }
  public getNikonProducts(): Observable<Nikon[]>
  {
    return this.http.get<Nikon[]>("http://localhost:9190/nikons")
  }
}
