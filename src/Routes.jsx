import React from "react";
import { Route, Routes } from "react-router-dom";
import Pedido from "./components/pedido/Pedido";
import PizzaDetails from "./components/pizzaria/PizzaDetails";
import Home from "./pages/home/Home";
import Orders from "./pages/orders/Orders";
import Profile from "./pages/profile/Profile";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pizzas" element={<PizzaDetails />} />
        <Route path="/pedido/:id" element={<Pedido />} />
      </Routes>
    </>
  );
}
