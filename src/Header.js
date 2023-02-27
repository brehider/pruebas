import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header ">
      <nav className="nav ">
        <ul className="nav__list">
          <li className="nav__item"><a href="/" className="nav__link">Inicio</a></li>
          
          <li className="nav__item"><a href="/contacto" className="nav__link">Contacto : 304 378 8558</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;