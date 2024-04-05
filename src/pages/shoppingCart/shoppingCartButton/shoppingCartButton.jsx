import { Fab, IconButton } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

function shoppingCartButton() {
    return (
        <IconButton aria-label="cart">
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon color="action"  />
        </Badge>
      </IconButton>
    )
}

export default shoppingCartButton