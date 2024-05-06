import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pathRoutes } from "./PathRoutes";
import HomePage from "@pages/home/HomePage";
import ProductPage from "../pages/product/ProductPage";
import productDetailPage from "../pages/productDetail/ProductDetailPage";
import shoppingCartPage from "../pages/shoppingCart/shoppingCartPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";


function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pathRoutes.home} Component={HomePage}></Route>
        <Route path={pathRoutes.products} Component={ProductPage}></Route>
        <Route path={`${pathRoutes.productDetail}/:id`} Component={productDetailPage}></Route>
        <Route path={pathRoutes.shoppingCart} Component={shoppingCartPage}></Route>
        <Route path={`${pathRoutes.checkout}/:id`} Component={CheckoutPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default WebRoutes;