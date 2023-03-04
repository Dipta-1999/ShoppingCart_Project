import { Component } from '@angular/core';
import { CartService } from './service/cart.service';
import { MessengerService } from './service/messenger.service';
import { MessengerwishService } from './service/messengerwish.service';
import { ProductService } from './service/product.service';
import { UserRegistrationService } from './service/user-registration.service';
// import {NgxPaginationModule} from 'ngx-pagination';
// import { NgxImgZoomService } from 'ngx-img-zoom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService, MessengerService, MessengerwishService, CartService]
})
export class AppComponent {
  title = 'ShoppingCart';

  // enableZoom: Boolean = true;
  // previewImageSrc = 'pathToImage';
  // zoomImageSrc = 'pathToImage';
  //p:any
  // bgimg:string="https://wallpaperaccess.com/full/3242564.jpg";
  // bgimg:string = "https://www.thoughtco.com/thmb/uHaqS2Nr_Z-DGRxVbWgId1tH66c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/film-photography-592347645-59e4d0609abed500119e7b14.jpg";
  constructor(protected authService:UserRegistrationService){  }
}
