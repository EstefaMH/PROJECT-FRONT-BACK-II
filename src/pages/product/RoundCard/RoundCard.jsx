import PropTypes from 'prop-types';
import './RoundCard.css';

function RoundCard({ product }) {

  return (
    <article className="round-card">
      <aside className="round-card-vector">
        <img src={product.thumbnails[0]} />
      </aside>
      <aside className="round-card-">
        <h3 className="round-card-price">${product.price}</h3>
        <h2 className="round-card-description">{product.title}</h2>
      </aside>
    </article>
  );
}

RoundCard.propTypes = {
  product: PropTypes.object
}

export default RoundCard
