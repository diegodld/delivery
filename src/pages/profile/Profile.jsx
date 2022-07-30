import React from "react";
import * as Icon from "react-icons/fa";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <p className="image">
          <Icon.FaUserCircle size={80} />
        </p>
        <p>
          <b>Diego Lopes</b>
        </p>
        <p>
          <b>E-mail: </b> diegolopesdld@gmail.com
        </p>
        <button>Alterar dados</button>
      </div>
    </div>
  );
}
