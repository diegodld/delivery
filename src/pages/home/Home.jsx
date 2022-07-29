import React from "react";
import Card from "../../components/card/Card";
import "./home.css";

export default function Home() {
  return (
    <div className="card-container">
      <Card
        title="Pizzaria"
        img="https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640"
        description="Diversos sabores de pizza à pronta entrega."
        link="/pizzas"
      />
      <Card
        title="Hamburgueria"
        img="https://img.itdg.com.br/tdg/images/blog/uploads/2019/05/hamburguer.jpg"
        description="Hambúrgueres da melhor qualidade."
        link="/hamburgueres"
      />
      <Card
        title="Churrascaria"
        img="https://cdnm.westwing.com.br/glossary/uploads/br/2015/07/31012545/espetinho-de-carne-para-churrasco-salada-e-farofa-em-tabua-decorativa-iStock.jpg"
        description="Churrascos com carnes de qualidade."
        link="/churrascos"
      />
      <Card
        title="Sorveteria"
        img="https://www.sabornamesa.com.br/media/k2/items/cache/2a0f7ca5d11b9dcfd75558a39ae144f8_XL.jpg"
        description="Sorvetes diversos venha conferir!"
        link="/sorvetes"
      />
    </div>
  );
}
