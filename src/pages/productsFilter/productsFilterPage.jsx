import Layout from "../layout/Layout"
import CategoriesMenu from "../product/Categories/CategoriesMenu"
import ItemListContainer from "../product/ItemListContainer/ItemListContainer"

function productsFilterPage() {
  return (
    <Layout>
        <h1> Productos</h1>
        <CategoriesMenu />
        <ItemListContainer/> 
    </Layout>
  )
}

export default productsFilterPage