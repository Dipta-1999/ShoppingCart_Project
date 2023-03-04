import { ProductDetails } from "./product-details";
import { User } from "./user";

export class WishlistItem {
    id : number;
    user_id: number;
    product_id: number;
    product_name : string;
    price : number;
  //prod= new ProductDetails();
  //product: string | undefined;
  constructor(id=0, user:User, product: ProductDetails)
  {
      this.id= id;
      this.user_id=user.id;
      this.product_id=product.id;
      this.product_name=product.name;
      this.price=product.price;
      
      
  }
}
