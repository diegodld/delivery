import React from "react";
import "./pizzadetails.css";
import List from "../lists/List";
import { pizzas } from "../../data/products";
export { pizzas } from "../../data/products";

export default function PizzaDetails() {
  return (
    <div className="pizza-container">
      <img
        src="https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1641438606/ewswdm41ssp5tq8yge9i.jpg"
        alt="pizza"
      ></img>
      <section className="pizzas">
        <ul>
          {pizzas.map((item) => (
            <li key={item.name}>
              <List
                name={item.name}
                price={item.price.toFixed(2)}
                image={item.image}
                id={item.id}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
