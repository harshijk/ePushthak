
import { Routes,Route } from "react-router-dom"
import { HomePage } from "../pages";
import { ProductList } from "../pages";
import { ProductDetail } from "../pages";
import { Login , Register } from "../pages";
import { CartPage } from "../pages";
import { OrderPage } from "../pages/Orders/OrderPage";
import { ProtectRoute } from "./ProtectRoute";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { PageNotFound } from "../pages";

export const Allrouter = () => {
  return (
    <main>
    <Routes>
        <Route path="/" element={<HomePage/>}  />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="cart" element={<ProtectRoute> <CartPage/> </ProtectRoute>} />
        <Route path="order-summary" element={<ProtectRoute> <OrderPage/> </ProtectRoute>} />
        <Route path="dashboard" element={<ProtectRoute> <DashboardPage/> </ProtectRoute>} />
        <Route path="*" element={<PageNotFound />}/>
    </Routes>
    </main>
  )
}
