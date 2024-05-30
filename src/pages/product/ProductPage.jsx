import Layout from "../layout/Layout";
import CategoriesMenu from "./Categories/CategoriesMenu";
import ItemListContainer from "./ItemListContainer/ItemListContainer";


export default function ProductPage() {
  return (
    <Layout>
      <h1>Productos</h1>
      <CategoriesMenu />
      <ItemListContainer />
     
    </Layout>
  )
}


