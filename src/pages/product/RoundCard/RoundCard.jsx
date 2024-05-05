import PropTypes from 'prop-types';
import { Product } from '../../../models/product';
import './RoundCard.css';

function RoundCard({product}) {

  return (
    <article className="round-card">
      <aside className="round-card-vector">
       <img src={product.image} />
      </aside>
      <aside className="round-card-">
        <h2 className="round-card-description">{product.features}</h2>
        <h3 className="round-card-price">$ {product.price_out}</h3>
      </aside>
    </article>
  );
}

RoundCard.propTypes = {
  product: PropTypes.instanceOf(Product).isRequired
}

export default RoundCard
