import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext, CartListContext } from '../../../../contexts/Contexts';
import { pathRoutes } from '../../../../routes/PathRoutes';
import ProductsService from '../../../../services/firebase/products.service';


function ProductDetailCard() {

    let productsService = new ProductsService();

    const {  setCartList } = useContext(CartListContext);
    const {  setCart } = useContext(CartContext);

    const { id } = useParams();
    let navigate = useNavigate();

    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getProduct();
    }, [id]);

    async function getProduct() {
        try {
            const productDoc = await productsService.getProductById(id);
            setProduct(productDoc);
        } catch (error) {
            alert("Error al obtener el producto: " + error.message);
            navigate(pathRoutes.products);
        }
    }

    function calculateTotal(qty) {
        const totalPrice = product.price_out * qty;
        return Number.isInteger(totalPrice) ? totalPrice : totalPrice.toFixed(2);
    }


    function handleSubmitCart(e) {
        e.preventDefault();

        if (quantity > 0) {
            setCartList(cartList => {
                const existingProductIndex = cartList.findIndex(item => item.id === id);
                const updatedCartList = [...cartList];

                if (existingProductIndex !== -1) {
                
                    const existingProduct = updatedCartList[existingProductIndex];
                    existingProduct.quantity += quantity;
                    existingProduct.total = calculateTotal(existingProduct.quantity);
                } else {
                    // Product does not exist in the cart, add it
                    const newProduct = {
                        id: id,
                        ref: product.ref,
                        price_out: product.price_out,
                        size: "S",
                        image: product.image,
                        features: product.features,
                        quantity: quantity,
                        total: calculateTotal(quantity),
                    };
                    updatedCartList.push(newProduct);
                }

                setCart(prevCart => prevCart + quantity);

                return updatedCartList;
            });
        } else {
            alert("Agregue mínimo un producto para poderlo añadir al carrito");
        }
    }

    return (
        <section className="details">
            <section className='section-details-name'>
                <h1>{product.features}</h1>
            </section>
            <div className="section-image-tallas">
                <div className="size description-card">
                    <h2>Ref. {product.ref} </h2>
                    <div className="description-brand">
                        <p className="description-brand-title">Marca </p>
                        <p>{product.brand}</p>
                    </div>
                    <div className="price">
                        <span className="price-out">$ </span>
                        <span className="price-out ">{product.price_out}</span>
                    </div>
                </div>
                <article className='card-details-img'>
                    <img src={product.image} alt="Product Image" />
                </article>
            </div>

            <div className="section-image-details">
                <div className="section-product">
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
                        <span className="amount">{calculateTotal(quantity)}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetailCard;
