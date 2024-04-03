import { List } from "@mui/material"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import getProducts from "../../../__mocks__/GetProducts";


function ItemListContainer() {

    const [position, setPosition] = useState("both");
    const [align, setAlign] = useState("center");
    const [products , setProducts] = useState([]);
    
    
    useEffect(() => {
        getProducts();
    }, []);


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
                    md: 3,
                    lg: 3,
                    xl: 3,
                    xxl: 6,
                }}
                dataSource={products}
                renderItem={(item, i) => (

                    <List.Item key={i}>
                        <Link className="accesories-cards-link" to={`${pathRoutes.uniform}/${item.idProducto}`}>
                            <RoundCard
                                imgPath={item.imagen.data}
                                product={item.nombre}
                                price={item.precio_venta}
                            />
                        </Link>
                    </List.Item>

                )}
            />
        </section>
    )
}

export default ItemListContainer