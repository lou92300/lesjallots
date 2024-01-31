import React from "react";
import { NavLink } from "react-router-dom";
import photo from "../assets/img/ferme1.png";

export default function Header() {
  return (
    <header>
      <img src={photo} alt="" />
      <nav>
        <NavLink to={"Accueil"}>Accueil</NavLink>
        <NavLink to={"Réservation"}>Réservation</NavLink>
        <NavLink to={"Contact"}>Contact</NavLink>
        <NavLink to={"Connexion"}>Connexion</NavLink>
      </nav>
    </header>
  );
}
