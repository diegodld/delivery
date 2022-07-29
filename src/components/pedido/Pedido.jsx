import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pizzas } from "../../data/products";
import { BsCart4 } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import ModalPagamento from "../Modal/ModalPagamento";
import "./pedido.css";

export default function Pedido() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  const { id } = useParams();
  const product = pizzas.filter((pizza) => {
    return pizza.id === Number(id);
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    // navigate("/orders");
  };

  if (Number(id) === 0) {
    return (
      <>
        <p
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            marginTop: "40vh",
          }}
        >
          Só aceitamos pedidos de Pizza!
        </p>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </>
    );
  }

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
            <p>
              <b>Endereço:</b>
              <MdLocationOn /> Av. Vitória, Vitória - ES, 57
            </p>
            <form onSubmit={handleSubmit}>
              <p>
                <b>Pagamento:</b> Cartão de Crédito
              </p>
              <p>
                <b>Número Cartão:</b> <input type="text" />
              </p>
              <button>Confirmar pedido</button>
            </form>
          </section>
          <BsCart4 size={30} />
        </div>
        <ModalPagamento
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      </div>
    );
}
