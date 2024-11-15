import React from 'react';
import { Link } from 'react-router-dom'; // Importera Link från react                                izations
import './header.css';

export const logotyp = {
  logo: "Learn React"
}

function Header() {
  return (
    <header className="site-header">
      <div className="logo">{logotyp.logo}</div>
      <nav className="navbar">
        <Link to="/home" className="nav-item">Hem</Link>
        <Link to="/services" className="nav-item">Tjänster</Link>
        <Link to="/contact" className="nav-item">Kontakt</Link>
      </nav>
      {/* Funderar på att tabort Profil */}
      <div className="user-icon">Profil</div>
    </header>
  );
}

export default Header;
