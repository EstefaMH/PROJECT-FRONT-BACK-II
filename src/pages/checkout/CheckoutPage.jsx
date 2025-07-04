import { Collapse, Descriptions, Table } from "antd";
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../layout/Layout";
import './Checkout.css';
import CartService from "../../services/firebase/cart.service";

const { Panel } = Collapse;

function CheckoutPage() {

    const { id } = useParams();

    const screens = useBreakpoint();

    let cartService = new CartService();

    const currentDate = new Date();

    const [checkoutItems, setCheckoutItems] = useState({
        user: {},
        cart: []
    });

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (text) => <img src={text} alt="product" style={{ width: '100px', height: 'auto' }} />
        },
        {
            title: 'Features',
            dataIndex: 'features',
            key: 'features'
        },
        {
            title: 'Price',
            dataIndex: 'price_out',
            key: 'price_out'
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity'
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size'
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total'
        }
    ];

    const items = [
        {
            key: '4',
            span: 1,
            label: 'Fecha de compra',
            children: currentDate.toDateString(),
        },
        {
            key: '5',
            span: 1,
            label: 'Id de compra',
            children: id,
        },
        {
            key: '1',
            span: 2,
            label: 'Nombre',
            children: checkoutItems.user.name,
        },
        {
            key: '2',
            label: 'e-mail',
            children: checkoutItems.user.email,
        },
        {
            key: '3',
            label: 'Phone',
            children: checkoutItems.user.phone,
        },


    ];



    async function getCheckout() {

        let cartDoc = await cartService.getCartById(id);
        setCheckoutItems({ user: cartDoc.user, cart: cartDoc.cart })
    }

    useEffect(() => {
        getCheckout();
    }, [])


    return (
        <Layout>
            <h1>CONFIRMACIÓN DE COMPRA </h1>

            <Descriptions className="checkout-description" title="Información de compra" layout="vertical" bordered items={items} />


            <div style={{ overflowX: 'auto', width: '90%' }}>
                {screens.xs ?

                    <Collapse>
                        {checkoutItems.cart.map((item, i) => {
                            return (
                                <Panel header={item.features} key={i}>
                                    <img className="checkout-img-mobile" src={item.image} />
                                    <li>
                                        <ul><strong>Producto :</strong> {item.features}</ul>
                                        <ul><strong>Cantidad :</strong>{item.quantity}</ul>
                                        <ul><strong>Precio :</strong>{item.price_out}</ul>
                                        <ul><strong>Total :</strong>{item.total}</ul>
                                    </li>
                                </Panel>
                            )
                        })}

                    </Collapse>

                    : (
                        <Table
                            columns={columns}
                            dataSource={checkoutItems.cart}
                            bordered
                            pagination={false}
                            style={{ minWidth: '100%' }}
                        />
                    )}
            </div>
        </Layout>
    )
}

export default CheckoutPage