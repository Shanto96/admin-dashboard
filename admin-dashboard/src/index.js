import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Sidebar from "./Components/sidebar/Sidebar";
import Navbar from "./Components/navbar/Navbar";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="d-flex">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-container w-100">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<List />}></Route>
          <Route path="product/:productID" element={<Single />}></Route>
          <Route path="users" element={<List />}></Route>
          <Route path="user/:userID" element={<Single />}></Route>
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);
