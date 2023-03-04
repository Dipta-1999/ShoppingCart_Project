//import { Product } from './product';
import { ProductDetails } from "./product-details";
import { User } from "./user";

export class CartItem {
  id : number;
  userId: number;
  productId: number;
  name : string;
  price : number;
  quantity : number;
  //prod= new ProductDetails();
  //product: string | undefined;
  constructor(id=0, user:User, product: ProductDetails, quantity=1)
  {
      this.id= id;
      this.userId=user.id;
      this.productId=product.id;
      this.name=product.name;
      this.price=product.price;
      this.quantity=quantity;

  }
}
