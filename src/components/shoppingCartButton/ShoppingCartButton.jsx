import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from "@mui/material";
import Badge from '@mui/material/Badge';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/Contexts';
import { pathRoutes } from "../../routes/PathRoutes";
import "./ShoppingCartButton.css";


function ShoppingCartButton() {

    const { cart } = useContext(CartContext)

    return (
        <Link className="shopping-cart-button" to={pathRoutes.shoppingCart}>
            <IconButton aria-label="cart">
                <Badge badgeContent={cart} color="primary">
                    <ShoppingCartIcon color="action" />
                </Badge>
            </IconButton>
        </Link>
    )
}

export default ShoppingCartButton