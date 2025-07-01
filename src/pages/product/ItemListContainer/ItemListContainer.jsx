
import { CircularProgress } from "@mui/material";
import { List } from "antd";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../../../models/product";
import { pathRoutes } from "../../../routes/PathRoutes";

import ProductService from "../../../services/mongo/productService";
import RoundCard from "../RoundCard/RoundCard";
import './ItemListContainer.css';


function ItemListContainer() {

   // const productsService = new ProductsService();
    const productInstance = new Product();

    const { id } = useParams();
    console.log(id)

    const [loading, setLoading] = useState(true)
    const [position] = useState("both");
    const [align] = useState("center");
    const [products, setProducts] = useState([]);

    async function getProductsList() {
        //const data = await productsService.getProducts();
        const productService = new ProductService()
        const data = await productService.getAll();
        console.log("res data", data)
        setProducts(data)
        setLoading(false)
    }

    /*async function getProductsListFilter() {
        const data = await productsService.getProductsFilter(id);
        console.log(data)
        setProducts(data)
        setLoading(false)
    }*/

    useEffect(() => {
        getProductsList()
    }, []);

   /* useEffect(() => {
        id != undefined ?
        getProductsListFilter()
        :
        getProductsList()
    }, [id])*/
    



    return (
        <section className="accesories-cards">
            {loading ? <CircularProgress /> :
                <List
                    pagination={{
                        position,
                        align,
                        defaultPageSize: 9
                    }}
                    grid={{
                        gutter: [3, 9],
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                    }}
                    dataSource={products}
                    renderItem={(product, i) => (
                        <List.Item key={i}>
                            <Link
                                className="accesories-cards-link"
                                to={`${pathRoutes.productDetail}/${product.id}`}
                            >
                                <RoundCard
                                    //product={productInstance.toFirestore(product)}
                                    product={product}
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