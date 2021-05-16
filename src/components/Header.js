import React from 'react';
import { Link } from "react-router-dom";
import logoHeader from '../images/logo__header.svg';

function Header({ linkTitle, path, children }) {
  return (
    <header className="header">
      <ul className="navbar">
        <li className="navbar__string">
          <Link className="navbar__string-link" to="/">
            <img className="header__logo" src={logoHeader} alt="Логотип" />
          </Link>
        </li>
        <li className="navbar__string">
          <Link className="navbar__string-link" to="/">
            <p className="header__link-title hover-opacity">{linkTitle}</p>
          </Link>
        </li>
        {children}
      </ul>
    </header>
  );
}

export default Header;
