import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/models/product-details';
import { ViewDetails } from 'src/app/models/view-details';
import { ProductService } from 'src/app/service/product.service';
import { ViewDetailsService } from 'src/app/service/view-details.service';
//import { NgxImgZoomService } from 'ngx-img-zoom';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  // @Input() productItem!: ProductDetails;
  viewDetails: ViewDetails[]=[]
  v!:ViewDetails
  vd:any
  vdt:any
  //enableZoom:boolean= true;
  constructor(
    private viewDetailService: ViewDetailsService,
    private prodserv: ProductService,
    //private ngxImgZoom: NgxImgZoomService
  ) {
    // this.ngxImgZoom.setZoomBreakPoints([{w: 100, h: 100}, {w: 150, h: 150}, {w: 200, h: 200}, {w: 250, h: 250}, {w: 300, h: 300}]);
  }

  ngOnInit(): void {
    this.details();
  }
  details()
  {
    this.vd= this.viewDetailService.get_viewDetails();
    this.vd=JSON.parse(localStorage.getItem('viewdet')!);
    console.log(this.vd)
  }
}
