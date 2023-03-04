export class Sony {
  id : number;
	name : string;
  imgurl: string;
	details : string;
	price : number;
    //product: string | undefined;

    //constructor(){}
    constructor(id=0, name='', imgurl='', details='', price=0)
    {
        this.id= id;
        this.name=name;
        this.imgurl=imgurl;
        this.details=details;
        this.price=price;
    }
}
