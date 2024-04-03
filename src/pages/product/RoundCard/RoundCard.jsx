import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Product } from '../../../models/product';

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
       
      </aside>
      <aside className="round-card-">
        <h2 className="round-card-description">{product}</h2>
        <h3 className="round-card-price">$ {product.id}</h3>
      </aside>
    </article>
  );
}

RoundCard.propTypes = {
  product: PropTypes.instanceOf(Product).isRequired
}

export default RoundCard
