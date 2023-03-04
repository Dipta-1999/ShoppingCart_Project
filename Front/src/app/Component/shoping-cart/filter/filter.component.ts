import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { ProductDetails } from 'src/app/models/product-details';
import { MeseengerFilterService } from 'src/app/service/meseenger-filter.service';
import { MessengerService } from 'src/app/service/messenger.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  productItem!: ProductDetails;
  p!:Filter
  f:Filter[]=[]
  produ:ProductDetails[]=[];
  p1:number=0;
  p2:number=0;
  filt:Filter= new Filter()
  @Input() prod!: ProductDetails
  o:any
  filters:boolean=false

  filterList:Filter[]=[];

  constructor(
    private msg: MessengerService,
    private msgfil:MeseengerFilterService,
    private productService: ProductService) {
     }

  ngOnInit(): void {
    //this.filter()

  }

  filter()
  {

    this.productService.getProductsFilter(this.p1,this.p2).subscribe(
      (data:any)=>{
        this.produ=data;
        this.filterList=data;

        localStorage.setItem('filter', JSON.stringify(data))
        //this.filter=true;
        console.log(this.produ);
      }
    )
    //this.msgfil.set_filter(this.filt);
    this.msgfil.set_filterList(this.filterList);
    // this.o=this.msgfil.get_filter();
    // console.log(this.o);
  }




}
