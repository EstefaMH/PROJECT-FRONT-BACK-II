import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetProductById from '../../__mocks__/GetProductById';
import './components/ProductDetailCard/ProductDetail.css'

function ProductDetailPage(props) {

  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad
  console.log(product)

  async function Product() {
    const getProduct = await GetProductById(id);
    setProduct(getProduct);
  }

  useEffect(() => {
    Product()
  }, [id]);

  // Función para calcular el total
  function calculateTotal() {
    const totalPrice = product.precio_venta * quantity;
    return Number.isInteger(totalPrice) ? totalPrice : totalPrice.toFixed(2);
  }

  // Función para separar las tallas
  function getTallas() {
    if (product.dimensiones) {
      return product.dimensiones.split('/');
    }
    return [];
  }


  return (
    <section className="details">
      <div className="section-image-tallas">
        <div className="section">
          <div className="image">
            <article className="round-card">
              <aside className="round-card-vector">
                
              </aside>
            </article>
          </div>
          <div className="price">
            <span className="currency">$</span>
            <span className="amount">{product.price_out}</span>
          </div>
        </div>
      </div>
      <div className="section-image-details">
        <div className="section">
          <div className="size">
            <h3>Tallas </h3>
            <div className="size-cards">
             
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section">
            <div className="section-btns">
              <button className="btn" onClick={() => setQuantity(quantity - 1)}>-</button>
              <input
                type="number"
                className="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button className="btn" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="add-btn">Agregar</button>
            <div className="total-price">
              <h3>Total:  </h3>
              <span className="currency">$</span>
              <span className="amount">{calculateTotal()}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

ProductDetailPage.propTypes = {}

export default ProductDetailPage

