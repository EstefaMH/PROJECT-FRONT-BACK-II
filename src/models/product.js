import PropTypes from 'prop-types';

export class Product {

    constructor(id ,ref, price_in,price_out,size,image,features,brand,category) {
        this.id = id;
        this.ref = ref
        this.price_in = price_in;
        this.price_out = price_out;
        this.size =size ;
        this.image = image;
        this.features =features;
        this.brand =brand;
        this.category = category;
    }  

    toFirestore(product){
        return {
            brand: product.brand,
            features: product.features,
            image: product.image,
            price_in: product.price_in,
            price_out: product.price_out,
            ref: product.ref,
            category: product.Categoria
        };
    }

    fromFirestore(snapshot, options){
        const data = snapshot.data(options);
        return new Product(data.brand, data.features, data.image, data.price_in, data.price_out, data.ref, data.category);
    }

}

export const productPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    ref: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price_in: PropTypes.number.isRequired,
    price_out: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    features: PropTypes.any,
    brand: PropTypes.string.isRequired,
    category: PropTypes.number.isRequired
});
