import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Product } from '../../../models/product';
import './RoundCard.css';
import Imagen from '../../../assets/balon1.png'

function RoundCard({product}) {


 // const [imageUrl, setImageUrl] = useState('');
 // console.log(imageUrl);

  /*useEffect(() => {
    const blob = new Blob([new Uint8Array(imgPath)], { type: 'image/png' });

    const url = URL.createObjectURL(blob);

    setImageUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [imgPath]);
  console.log(imgPath);*/

  return (
    <article className="round-card">
      <aside className="round-card-vector">
       <img src={Imagen} />
      </aside>
      <aside className="round-card-">
        <h2 className="round-card-description">{product.ref}</h2>
        <h3 className="round-card-price">$ {product.price_in}</h3>
        <h4 className="round-card-price">{product.name}</h4>
      </aside>
    </article>
  );
}

RoundCard.propTypes = {
  product: PropTypes.instanceOf(Product).isRequired
}

export default RoundCard
