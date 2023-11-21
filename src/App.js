import React from "react";
import HomePage from "./pages/home-page/HomePage";
import {Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shop-page/ShopPage";
import ProductPage from "./pages/product-page/ProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={"/"} element={<HomePage/>}></Route>
          <Route path={"/shop"} element={<ShopPage/>}></Route>
          <Route path={"/shop/:category/:productId"} element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
