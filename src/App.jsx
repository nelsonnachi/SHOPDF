import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./layout/userLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./components/Search";
import Shop from "./pages/Shop";
import SingleProduct from "./components/singleProduct";
import Login from "./components/Login";
import AuthForm from "./components/AuthForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/search" element={<Search />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:_id" element={<SingleProduct />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
