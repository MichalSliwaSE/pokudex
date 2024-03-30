import { Link } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
  return (
    <header>Powered by
      <a href="https://pokeapi.co/" className="navbar-container_link">
          <img
            src={process.env.PUBLIC_URL + "/assets/logo.png"}
            alt="Pokedex Logo"
          />
        </a>
      <h1>POKUDEX</h1>
      <nav className="navbar-container">
        <Link to="/" className="navbar-container_link">
          Pokédex
        </Link>
        
        <Link to="/about" className="navbar-container_link">
          About
        </Link>
      </nav>
    </header>
  );
}
