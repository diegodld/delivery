import React from "react";
import Card from "../../components/card/Card";
import pizza from "../../components/card/img/pizza.jpg";
import hamburguer from "../../components/card/img/hamburguer.webp";
import churrasco from "../../components/card/img/churrasco.jpg";
import sorvete from "../../components/card/img/sorvete.jpg";
import "./home.css";

export default function Home() {
  return (
    <div className="card-container">
      <Card
        title="Pizzaria"
        img={pizza}
        description="pizzaria perfeita"
        link="/pizzas"
      />
      <Card
        title="Hamburgueria"
        img={hamburguer}
        description="Hamburgueria top"
      />
      <Card
        title="Churrascaria"
        img={churrasco}
        description="churrascaria top"
      />
      <Card title="Sorveteria" img={sorvete} description="sorveteria top" />
    </div>
  );
}
