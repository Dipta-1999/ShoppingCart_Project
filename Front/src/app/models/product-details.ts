

export class ProductDetails {
    id : number;
	  name : string;
    imgurl: string;
	  quantity : number;
	  price : number;

    constructor(id=0, name='', imgurl='', quantity=0, price=0)

    {
        this.id= id;
        this.name=name;
        this.imgurl=imgurl;
        this.quantity=quantity;
        this.price=price;
    }
}
