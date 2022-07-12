import React from "react";
import { NavLink } from "react-router-dom";
import * as Icon from "react-icons/fa";
import "./navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <ul className="nav-items">
        <li>
          <NavLink to="/">
            <Icon.FaHome size={30} />
            <p>Inicio</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders">
            <Icon.FaRegListAlt size={30} />
            <p>Pedidos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <Icon.FaUserCircle size={30} />
            <p>Perfil</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
