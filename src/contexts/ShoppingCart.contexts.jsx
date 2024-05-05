import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { CartContext, CartListContext } from '../contexts/Contexts';
import { Cart } from '../models/cart';


function ShoppingCartContexts({ children }) {
    const [cart, setCart] = useState(0);
    const [cartList, setCartList] = useState([]);

    
    useEffect(() => {
       const storedCartList = localStorage.getItem('cartListStorage');
        console.log(storedCartList)
        if (storedCartList) {
            setCartList(JSON.parse(storedCartList));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartListStorage', JSON.stringify(cartList));
        setCart(cartList.length)
    }, [cartList]);


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