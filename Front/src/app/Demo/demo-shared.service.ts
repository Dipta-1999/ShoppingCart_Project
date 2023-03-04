import { Injectable } from '@angular/core';
import { Demo } from './Class/demo';

@Injectable({
  providedIn: 'root'
})
export class DemoSharedService {

  constructor() { }

  private demo: Demo = new Demo();
  private _userId!: number;

  public get_userId(): number {
    return this._userId;
  }

  public set_userId(value: number) {
    this._userId = value;
  }

  public getDemo(): Demo {
    return this.demo;
  }

  public setDemo(value: Demo) {
    this.demo = value;
  }
}
