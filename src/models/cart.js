export class Cart{

    cartList = [];
   
    constructor(id ,ref,price_out,size,image,features,quantity, total) {
        this.id = id;
        this.ref = ref
        this.price_out = price_out;
        this.size =size ;
        this.image = image;
        this.features =features;
        this.quantity = quantity;
        this.total = total;
    }  

    toFirestore(cart){
        return {
            ref: cart.ref,
            price_out: cart.price_out,
            size: cart.size,
            image: cart.image,
            features: cart.features,
            quantity: cart.quantity,
            total: cart.total
        };
    }

    fromFirestore(snapshot, options){
        const data = snapshot.data(options);
        return new Cart(data.ref, data.price_out, data.size, data.size, data.image, data.features, data.quantity, data.total);
    }


    pushToCartList(cart){
        this.cartList.push([...this.cartList, cart])
        console.log(this.cartList)
    }

}


