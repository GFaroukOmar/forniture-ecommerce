import React from "react";
import HomePage from "./pages/home-page/HomePage";
import {Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shop-page/ShopPage";
import ProductPage from "./pages/product-page/ProductPage";
import BlogPage from "./pages/blog-page/BlogPage";
import ContactPage from "./pages/contact-page/ContactPage";
import CartPage from "./pages/cart-page/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={"/"} element={<HomePage/>}></Route>
          <Route path={"/shop"} element={<ShopPage/>}></Route>
          <Route path={"/shop/:category/:productId"} element={<ProductPage/>}/>
          <Route path={"/blog"} element={<BlogPage/>}/>
          <Route path={"/contact-us"} element={<ContactPage/>}/>
          <Route path={"/cart"} element={<CartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
