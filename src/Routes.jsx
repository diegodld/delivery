import React from "react";
import { Route, Routes } from "react-router-dom";
import ChurrascoList from "./components/churrascaria/ChurrascariaList";
import HamburguerList from "./components/hamburgueria/HamburguerList";
import Pedido from "./components/pedido/Pedido";
import PizzaDetails from "./components/pizzaria/PizzaDetails";
import SorvetesList from "./components/sorveteria/SorvetesList";
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
        <Route path="/hamburgueres" element={<HamburguerList />} />
        <Route path="/sorvetes" element={<SorvetesList />} />
        <Route path="/churrascos" element={<ChurrascoList />} />
        <Route path="/pedido/:id" element={<Pedido />} />
      </Routes>
    </>
  );
}
