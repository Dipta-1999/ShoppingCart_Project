import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Filter } from '../models/filter';
import { ProductDetails } from '../models/product-details';

@Injectable({
  providedIn: 'root'
})
export class MeseengerFilterService {

  p!:ProductDetails
  //f!:Filter
  private p1!: number;

  private _filterList: Filter[] = [];

  public get_filterList(): Filter[] {
    return this._filterList;
  }

  public set_filterList(value: Filter[]) {
    this._filterList = value;
  }

  public get_p1(): number {
    return this.p1;
  }
  public set_p1(value: number) {
    this.p1 = value;
  }
  private p2!: number;
  public get_p2(): number {
    return this.p2;
  }
  public set_p2(value: number) {
    this.p2 = value;
  }
  //private subject= new Subject<any>()
  private filter: Filter = new Filter();

  public get_filter(): Filter {
    return this.filter;
  }
  public set_filter(value: Filter) {
    this.filter = value;
  }
  constructor() { }

  // sendMsg(f:Filter)
  // {
  //   this.subject.next(f);
  //   //this.subject.next(this.p2);
  // }

  // getMsg():Observable<any>
  // {
  //   return this.subject.asObservable()
  // }

}

