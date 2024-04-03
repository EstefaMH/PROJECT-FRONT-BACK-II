export class Product {
    constructor(id,ref, name, price_in,price_out,size,features,brand,category) {
        this.id = id;
        this.ref = ref
        this.price_in = price_in;
        this.price_out = price_out;
        this.size =size ;
        //this.image = image;
        this.name = name;
        this.features =features;
        this.brand =brand;
        this.category = category;
    }
}
