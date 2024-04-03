
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import getProducts from "../../../__mocks__/GetProducts";
import RoundCard from "../RoundCard/RoundCard";
import { Product } from "../../../models/product";
import { pathRoutes } from "../../../routes/PathRoutes";
import { Category } from "@mui/icons-material";
import './ItemListContainer.css';
import { List } from "antd";


function ItemListContainer() {

    const [position, setPosition] = useState("both");
    const [align, setAlign] = useState("center");
    const [products, setProducts] = useState([]);
    console.log(products);

    async function Products() {
        const x = await getProducts();
        console.log(x[0])
        setProducts(x);
    }

    useEffect(() => {
        Products()
    }, [products]);


    return (
        <section className="accesories-cards">
            <List
                pagination={{
                    position,
                    align,
                }}
                grid={{
                    gutter: 6,
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
                            to={`${pathRoutes.uniform}/${product.id}`}
                        >
                            <RoundCard
                                product={new Product(
                                    product.id,
                                    product.ref,
                                    product.name,
                                    product.price_in,
                                    product.price_out,
                                    product.size,
                                    product.features,
                                    product.brand,
                                    product.Category
                                )}
                            />
                        </Link>
                    </List.Item>
                )}
            />
        </section>
    )
}

export default ItemListContainer