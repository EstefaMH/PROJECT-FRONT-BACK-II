import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { CartContext, CartListContext } from '../contexts/Contexts';


function ShoppingCartContexts({ children }) {
    const [cart, setCart] = useState(0);
    const [cartList, setCartList] = useState([]);
    console.log(cart)

    
    useEffect(() => {
       const storedCartList = localStorage.getItem('cartListStorage');
       const storedCart = localStorage.getItem('cartStorage');
       console.log(storedCartList)
        if (storedCartList) {
            setCartList(JSON.parse(storedCartList));
            setCart(parseInt(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartListStorage', JSON.stringify(cartList));
        localStorage.setItem('cartStorage',cart)
    }, [cartList, cart]);


    return (
        <CartListContext.Provider value={{ cartList, setCartList }}>
            <CartContext.Provider value={{ cart, setCart }}>
                {children}
            </CartContext.Provider>
        </CartListContext.Provider>
    )
}

ShoppingCartContexts.propTypes = {
    children: PropTypes.node.isRequired
};
export default ShoppingCartContexts