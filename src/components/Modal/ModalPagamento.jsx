import React from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import { ImCheckmark2 } from "react-icons/im";
import "./modal.css";

export default function ModalPagamento({ showModal, handleCloseModal }) {
  const navigate = useNavigate();
  const redirect = () => {
    handleCloseModal();
    navigate("/orders");
  };
  return (
    <ReactModal
      isOpen={showModal}
      ariaHideApp={false}
      onRequestClose={handleCloseModal}
      className="modal"
      overlayClassName="over-modal"
    >
      <div className="modal-container">
        <div className="modal-content">
          <p style={{ fontSize: "1.1rem" }}>Pedido Confirmado!</p>
          <button onClick={redirect} style={{ width: "5rem", height: "4rem" }}>
            <ImCheckmark2 size={30} />
          </button>
        </div>
      </div>
    </ReactModal>
  );
}
