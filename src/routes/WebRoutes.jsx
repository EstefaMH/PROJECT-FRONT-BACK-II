import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import customPage from "../pages/custom/customPage";
import LoginPage from "../pages/login/LoginPage";
import ProductPage from "../pages/product/ProductPage";
import productDetailPage from "../pages/productDetail/ProductDetailPage";
import productsFilterPage from "../pages/productsFilter/productsFilterPage";
import RecoveryPage from "../pages/recovery/RecoveryPage";
import RegisterPage from "../pages/register/RegisterPage";
import shoppingCartPage from "../pages/shoppingCart/shoppingCartPage";
import { pathRoutes } from "./PathRoutes";


function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pathRoutes.home} Component={ProductPage}></Route>
        <Route path={pathRoutes.products} Component={ProductPage}></Route>
        <Route path={`${pathRoutes.productDetail}/:id`} Component={productDetailPage}></Route>
        <Route path={pathRoutes.shoppingCart} Component={shoppingCartPage}></Route>
        <Route path={`${pathRoutes.checkout}/:id`} Component={CheckoutPage}></Route>
        <Route path={pathRoutes.custom} Component={customPage}></Route>
        <Route path={`${pathRoutes.products}/:id`} Component={productsFilterPage}></Route>
        <Route path={`${pathRoutes.recovery}`} Component={RecoveryPage}></Route>
        <Route path={pathRoutes.login} Component={LoginPage}></Route>
        <Route path={pathRoutes.register} Component={RegisterPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default WebRoutes;