import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetProductById from '../../__mocks__/GetProductById';
import Layout from '../layout/Layout';
import './components/ProductDetailCard/ProductDetail.css';

function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  async function Product() {
    const getProduct = await GetProductById(id);
    setProduct(getProduct);
  }

  useEffect(() => {
    Product();
  }, [id]);

  function calculateTotal() {
    const totalPrice = product.price_out * quantity;
    return Number.isInteger(totalPrice) ? totalPrice : totalPrice.toFixed(2);
  }

  function getTallas() {
    if (product.dimensiones) {
      return product.dimensiones.split('/');
    }
    return [];
  }

  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      const imageModule = await import(`../../assets/${product.image}`);
      setProductImage(imageModule.default);
    }

    if (product.image) {
      fetchImage();
    }
  }, [product.image]);

  console.log(product.size)

  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>Id : {product.id}</p>
      <p>{product.features}</p>
      <section className="details">
        <div className="section-image-tallas">

          <article className="round-card">
            <aside className="round-card-vector">
              {productImage && <img src={productImage} alt="Product Image" />}
            </aside>
          </article>

          <div className="price">
            <span className="currency">$</span>
            <span className="amount">{product.price_out}</span>
          </div>

        </div>

        <div className="section-image-details">
          <div className="section-product">
            <div className="size">
              <h3>Marca </h3>
              <p>{product.brand}</p>
            </div>
            <div className="size">
              <h3>Tallas </h3>
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
                <h3>Total: </h3>
                <span className="currency">$</span>
                <span className="amount">{calculateTotal()}</span>
              </div>
            </div>
          </div>
       
      </section>
    </Layout>
  );
}

export default ProductDetailPage;
