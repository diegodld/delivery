import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import "./App.css";
import AppRoutes from "./Routes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <Navigation />
    </div>
  );
}

export default App;
