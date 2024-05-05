import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import ShoppingCartButton from '../../components/shoppingCartButton/ShoppingCartButton';
import ShoppingCartContexts from '../../contexts/ShoppingCart.contexts';
import './Layout.css';

function Layout(props) {



  return (
    <ShoppingCartContexts>
      <div className='layout'>
        <Header />
        {props.children}
        <ShoppingCartButton />
      </div>
    </ShoppingCartContexts>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
