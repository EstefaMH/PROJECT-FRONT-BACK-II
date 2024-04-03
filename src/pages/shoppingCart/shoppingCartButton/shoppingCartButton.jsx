import { Fab } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function shoppingCartButton() {
    return (
        <Fab color="primary" aria-label="add">
            <ShoppingCartIcon />
        </Fab>
    )
}

export default shoppingCartButton