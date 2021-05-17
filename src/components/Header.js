import React from 'react';
import { Link } from "react-router-dom";
import logoHeader from '../images/logo__header.svg';

function Header({ linkTitle, path, children }) {
  return (
    <header className="header">
      <Link className="link" to="/">
        <img className="header__logo" src={logoHeader} alt="Логотип" />
      </Link>
      <ul className="navbar">
        {children}
      </ul>
    </header>
  );
}

export default Header;
