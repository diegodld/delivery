import React from "react";
import "./list.css";
import List from "../lists/List";
import { churrascos } from "../../data/products";

export default function ChurrascoList() {
  return (
    <div className="churrasco-container">
      <img
        src="https://carnesparaguassu.com.br/wp-content/uploads/2016/12/churrasco.jpg"
        alt="churrasco"
      ></img>
      <section className="churrasco">
        <ul>
          {churrascos.map((item) => (
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
