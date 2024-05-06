
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import RoundCard from "../RoundCard/RoundCard";
import { Product } from "../../../models/product";
import { pathRoutes } from "../../../routes/PathRoutes";
import { Category } from "@mui/icons-material";
import './ItemListContainer.css';
import { List } from "antd";
import GetProducts from "../../../__mocks__/GetProducts";
import useFetchAndLoad from "../../../hooks/useFetch&Load";
import ProductsService from "../../../services/products.service";
import ProductsAdapter from "../../../adapters/products.adapters";


function ItemListContainer() {

    const productsService = new ProductsService();
    const productInstance = new Product();

    //const { loading, callEndpoint } = useFetchAndLoad();
   // console.log(loading);

   const [loading, setLoading] = useState(true)


    const [position] = useState("both");
    const [align] = useState("center");
    const [products, setProducts] = useState([]);
    console.log(products);

    async function Products() {
        const getProducts = await GetProducts();
        setProducts(getProducts);
    }

    /*async function products2() {
        const data = await callEndpoint(productsService.getProducts());
        setProducts(data)
        const product = {
            "id": "d",
            "ref": "F5A5000",
            "price_in": "282000",
            "price_out": "394842",
            "size": ["3", "4", "5", "6"],
            "name": "BALON FÚTBOL",
            "features": "BALON FUTBOL NEW VANTAG ACENTEC 5",
            "brand": "Molten",
            "category": "1",
           }
        const adapter = ProductsAdapter(product)

        console.log(adapter)
    }*/

    async function productsFinal() {
        const data = await productsService.getProducts();
        setProducts(data)
        setLoading(false)
    }

    useEffect(() => {
        productsFinal()
    }, []);



    return (
        <section className="accesories-cards">
            {loading ? <h1>cargandoo</h1> :
                <List
                    pagination={{
                        position,
                        align,
                        defaultPageSize: 9
                    }}
                    grid={{
                        gutter: [3,9],
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 3,
                        xl: 3,
                        xxl: 4,
                    }}
                    dataSource={products}
                    renderItem={(product, i) => (
                        <List.Item key={i}>
                            <Link
                                className="accesories-cards-link"
                                to={`${pathRoutes.productDetail}/${product.id}`}
                            >
                                <RoundCard
                                    product={productInstance.toFirestore(product)}
                                />
                            </Link>
                        </List.Item>
                    )}
                />
            }
        </section>
    )
}

export default ItemListContainer