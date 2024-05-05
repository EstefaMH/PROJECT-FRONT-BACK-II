import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pathRoutes } from "./PathRoutes";
import HomePage from "@pages/home/HomePage";
import ProductPage from "../pages/product/ProductPage";
import productDetailPage from "../pages/productDetail/ProductDetailPage";
import shoppingCartPage from "../pages/shoppingCart/shoppingCartPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";


/*<Route path={pathRoutes.uniforms} Component={Uniforms}></Route>
        <Route path={pathRoutes.accesories} Component={Accesories}></Route>
        <Route path={pathRoutes.customers} Component={Customers}></Route>
        <Route path={pathRoutes.contact} Component={Contact}></Route>
        <Route path={`${pathRoutes.uniform}/:id`} Component={Uniform}></Route>
        <Route path={pathRoutes.privacy} Component={PrivacyPolicies}></Route>
        <Route path={pathRoutes.custom} Component={Custom}></Route>
        <Route path={pathRoutes.login} Component={Login}></Route>
        <Route path={pathRoutes.admin} Component={DashboardAdmin}></Route>
        <Route path={pathRoutes.uniform} Component={Uniform}></Route>
        <Route path={pathRoutes.adminAdd} Component={DashboardAdminAdd}></Route>
        <Route path={pathRoutes.adminDelete} Component={DashboardAdminDelete}></Route>
        <Route path={`${pathRoutes.adminUpdate}/:id`} Component={DashboardAdminUpdate}></Route>*/

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