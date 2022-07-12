import React from "react";
import Pizza from "./img/pizza.jpg";
import { NavLink } from "react-router-dom";
import "./card.css";

export default function Card({ title, description, img, link = "/" }) {
  return (
    <>
      <section className="card">
        <header>
          <h1>{title}</h1>
        </header>
        <section className="img">
          <img src={img} alt="Pizza" />
        </section>
        <section className="info">
          <p>{description}</p>
          <NavLink to={link}>Acessar</NavLink>
        </section>
      </section>
    </>
  );
}
