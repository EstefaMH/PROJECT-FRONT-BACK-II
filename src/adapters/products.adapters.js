import { Product, productPropType } from '../models/product'

function ProductsAdapter({ id, ref, price_in, price_out, size, name, features, brand, category }) {


    const product = new Product(
        id,
        ref,
        name,
        price_in,
        price_out,
        size,
        features,
        brand,
        category,
    )
    console.log(product, id)


    return {
        id: product.id,
        ref: product.ref,
        price_in: product.price_in,
        price_out: product.price_out,
        size: product.size,
        name: product.name,
        features: product.features,
        brand: product.brand,
        category: product.category
    }
}

ProductsAdapter.propTypes = {
    product: productPropType.isRequired
}

export default ProductsAdapter
