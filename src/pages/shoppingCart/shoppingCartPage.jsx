import Layout from "../layout/Layout";
import CartItemsList from "./components/CartItemsList";


function shoppingCartPage() {

  return (
    <Layout>
      <h1>Carrito de Compras</h1>
      <CartItemsList />
    </Layout>
  )
}

export default shoppingCartPage;