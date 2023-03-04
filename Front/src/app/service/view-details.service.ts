import { Injectable } from '@angular/core';
import { ViewDetails } from '../models/view-details';

@Injectable({
  providedIn: 'root'
})
export class ViewDetailsService {

  private _viewDetails: ViewDetails = new ViewDetails();
  public get_viewDetails(): ViewDetails {
    return this._viewDetails;
  }
  public set_viewDetails(value: ViewDetails) {
    this._viewDetails = value;
  }
  constructor() { }
}
