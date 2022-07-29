import React from "react";
import "./list.css";
import List from "../lists/List";
import { sorvetes } from "../../data/products";

export default function SorvetesList() {
  return (
    <div className="sorvete-container">
      <img
        src="https://www.meuproprionegocio.net.br/wp-content/uploads/2017/06/como-abrir-uma-sorveteria.jpg"
        alt="sorvete"
      ></img>
      <section className="sorvete">
        <ul>
          {sorvetes.map((item) => (
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
