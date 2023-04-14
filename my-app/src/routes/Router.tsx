import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/home/Home";
import Join from "../pages/account/join/Join";
import Login from "../pages/account/login/Login";
import Error from "../pages/errorLoading/Error";
import Cart from "../pages/cart/Cart";
import Order from "../pages/order/Order";
import ProductDetail from "../pages/products/productdetail/ProductDetail";
import { MainLayout } from "../component/layout/Layout";
import Search from "../pages/search/Search";


export default function Router() {
  return (
    <BrowserRouter basename="">
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/products/" element={<Outlet />}>
                    <Route path=":id/" element={<ProductDetail />}/>
                    <Route path="*" element={<Error />}/>
                </Route>
                <Route path="/cart/" element={<Outlet />}>
                    <Route path=":username/" element={<Cart />}/>
                    <Route path="*" element={<Error />}/>
                </Route>
                <Route path="/order/" element={<Outlet />}>
                    <Route path=":username/" element={<Order />}/>
                    <Route path="*" element={<Error />}/>
                </Route>
            </Route>
            <Route path="/account/" element={<Outlet />}>
                <Route path="join/" element={<Join />}/>
                <Route path="login/" element={<Login />}/>
                <Route path="*" element={<Error />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
