import { Fab } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pathRoutes } from "../../routes/PathRoutes";
import { Link } from "react-router-dom";
import "./ShoppingCartButton.css"

function ShoppingCartButton() {
    return (
        <Link className="shopping-cart-button" to={pathRoutes.shoppingCart}>
            <Fab color="primary" aria-label="add">
                <ShoppingCartIcon />
            </Fab>
        </Link>
    )
}

export default ShoppingCartButton