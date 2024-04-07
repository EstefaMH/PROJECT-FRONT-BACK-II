import { Fab, IconButton } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pathRoutes } from "../../routes/PathRoutes";
import { Link } from "react-router-dom";
import "./ShoppingCartButton.css"
import Badge from '@mui/material/Badge';

function ShoppingCartButton() {
    return (
        <Link className="shopping-cart-button" to={pathRoutes.shoppingCart}>
            <IconButton aria-label="cart">
                <Badge badgeContent={1} color="primary">
                    <ShoppingCartIcon color="action" />
                </Badge>
            </IconButton>
        </Link>
    )
}

export default ShoppingCartButton