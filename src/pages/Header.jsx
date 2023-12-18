import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <NavLink to="/" activeStyle={{ color: "tomato" }} end>
        Home
      </NavLink>
      <NavLink to="contato" activeStyle={{ color: "tomato" }}>
        Contato
      </NavLink>
    </nav>
  );
}
