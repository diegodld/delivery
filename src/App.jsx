import { useState, useEffect } from "react";
import Navigation from "./components/navigation/Navigation";
import "./App.css";
import AppRoutes from "./Routes";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Navigation />
    </div>
  );
}

export default App;
