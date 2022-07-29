import React from "react";
import "./list.css";
import List from "../lists/List";
import { hamburgueres } from "../../data/products";

export default function HamburguerList() {
  return (
    <div className="hamburguer-container">
      <img
        src="https://blog.dipratos.com.br/wp-content/themes/yootheme/cache/hamburgueria-equipamentos-necessarios-51e27ce0.jpeg"
        alt="hamburguer"
      ></img>
      <section className="hamburguer">
        <ul>
          {hamburgueres.map((item) => (
            <li key={item.name}>
              <List
                name={item.name}
                price={item.price.toFixed(2)}
                image={item.image}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
