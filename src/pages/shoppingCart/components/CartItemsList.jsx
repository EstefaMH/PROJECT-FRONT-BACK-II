import React, { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CartListContext, CartContext } from "../../../contexts/Contexts";
import { pathRoutes } from "../../../routes/PathRoutes";
import CartService from "../../../services/cart.service";
import "../shoppingCart.css"

function CartItemsList() {
  const navigate = useNavigate();

  let cartService = new CartService();

  const { cartList, setCartList } = useContext(CartListContext);
  const { setCart } = useContext(CartContext);


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  function handleDeleteItem(itemId, itemQuantity) {
    const deleteItem = cartList.filter((product) => product.id !== itemId);
    setCartList(deleteItem);
    setCart(prevCart => prevCart  - itemQuantity )
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let sendId = await cartService.sendCart(cartList, formData);
    handleClose();
    setCartList([]);
    localStorage.clear()

    navigate(`${pathRoutes.checkout}/${sendId}`);

  }

  return (
    <>
      <List sx={{ width: "95%", bgcolor: "background.paper" }}>
        {cartList.map(function (item, i) {
          return (
            <React.Fragment key={i}>
              <ListItem alignItems="flex-start" sx={{ display: "flex", justifyContent: "space-between" }}>
                <Link to={`${pathRoutes.productDetail}/${item.id}`} style={{ display: "flex", alignItems: "center" }}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={item.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.features + " - " + item.size}
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                          Cantidad:    {item.quantity}
                        </Typography>

                        <br />
                        <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                          Total:   {item.total}
                        </Typography>
                      </React.Fragment>

                    }
                  />
                </Link>
                <div style={{ marginLeft: "auto" }}>
                  <IconButton onClick={() => handleDeleteItem(item.id, item.quantity)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          );
        })}
      </List>


      <section className="button-buy">

        <Button
          style={{
            width: '100%',
            backgroundColor: cartList.length === 0 ? 'grey' : '#1976D2',
            color: 'white',
            padding: '1.5%',
            fontWeight: '800',
          }}
          disabled={cartList.length === 0}
          onClick={handleOpen}
        >
          Comprar
        </Button>
      </section>
      <div>
        <Modal
          open={open}
          onCancel={handleClose}
          title="Formulario de Usuario"
          footer={null}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Teléfono"
              name="phone"
              value={formData.phone}
              type='number'
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Correo electrónico"
              name="email"
              type='email'
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </form>
        </Modal>
        {/*{open && <ModalUserForm open={open} handleClose={handleClose} handleSubmit={handleSubmit} />}*/}
      </div>
    </>
  );
}

export default CartItemsList;
