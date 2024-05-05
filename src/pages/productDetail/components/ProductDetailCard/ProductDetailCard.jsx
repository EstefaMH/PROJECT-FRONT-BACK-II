import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartListContext } from '../../../../contexts/Contexts';
import ProductsService from '../../../../services/products.service';


function ProductDetailCard() {

    let productsService = new ProductsService();
    
    const { setCartList } = useContext(CartListContext)


    const { id } = useParams();

    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    
    useEffect(() => {
        getProduct()
    }, [id]);


    async function getProduct() {
        const product = await productsService.getProductById(id);
        setProduct(product);
    }


    function calculateTotal() {
        const totalPrice = product.price_out * quantity;
        return Number.isInteger(totalPrice) ? totalPrice : totalPrice.toFixed(2);
    }


    function handleSubmitCart(e) {

        e.preventDefault();
        
        setCartList(cartList => [...cartList,{
            id: id,
            ref: product.ref,
            price_out: product.price_out,
            size: "S",
            image: product.image,
            features: product.features,
            quantity: quantity,
            total: calculateTotal(),
        }])

    }


    return (

        <section className="details">
            <section className='section-details-name'>
                <p>{product.brand}</p>
                <h2>{product.features}</h2>
            </section>
            <div className="section-image-tallas">

                <article className='card-details-img' >
                    <img src={product.image} alt="Product Image" />
                </article>
            </div>

            <div className="section-image-details">
                <div className="section-product">
                    <div className="size">
                        <h3>Marca </h3>
                        <p>{product.brand}</p>
                    </div>
                    <div className="price">
                        <span className="currency">$</span>
                        <span className="amount">{product.price_out}</span>
                    </div>
                    <div className="size">
                        {product.size && product.size.length > 0 && <h3>Tallas </h3>}
                        <div className="size-cards">
                            {product.size && product.size.map((talla, index) => (
                                <div className="card" key={index}>
                                    <button>{talla}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="section">

                    <div className="section-btns">
                        <button className="btn btn-l" onClick={() => quantity > 0 && setQuantity(quantity - 1)}>-</button>
                        <input
                            type="number"
                            className="quantity"
                            value={quantity}
                            min={0}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                        <button className="btn btn-r" onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <button className="add-btn" onClick={handleSubmitCart}>Añadir al carrito</button>
                    <div className="total-price">
                        <h3>Total: </h3>
                        <span className="currency">$</span>
                        <span className="amount">{calculateTotal()}</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProductDetailCard