import React from "react";
import { useParams } from "react-router-dom";
import { pizzas } from "../../data/products";
import { BsCart4 } from "react-icons/bs";
import "./pedido.css";

export default function Pedido() {
  const { id } = useParams();
  const product = pizzas.filter((pizza) => {
    return pizza.id === Number(id);
  });

  if (!product) return null;
  else
    return (
      <div className="pedido">
        <div className="details">
          <section>
            <p>
              <b>Pedido: </b> {product[0].name}
            </p>
            <p>
              <b>Valor:</b> R$ {product[0].price.toFixed(2)}
            </p>
            <button>Confirmar pedido</button>
          </section>
          <BsCart4 size={30} />
        </div>
      </div>
    );
}
