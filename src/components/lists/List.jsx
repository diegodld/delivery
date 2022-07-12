import React from "react";
import { NavLink } from "react-router-dom";
import "./list.css";

export default function List({ name, price, image, id = 10 }) {
  return (
    <div className="list-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        <strong>Preço: </strong>R$ {price}
      </p>
      <NavLink to={`/pedido/${id}`}>Fazer pedido</NavLink>
    </div>
  );
}
