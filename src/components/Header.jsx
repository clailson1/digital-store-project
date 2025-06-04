import { useState } from "react";
import { Link } from "react-router-dom"; // Importe o componente Link
import miniCart from "../assets/mini-cart.svg";
import Logo from "./Logo";
import logoHeader from '../assets/logo-header.svg';
import "../styles/Header.css";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <div className="header-div">
      <div className="top-bar">
        <div className="left-section">
          <div className="hamburger" onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </div>
          <div className="logo-header">
            <Link to="/" >
              <Logo logo={logoHeader}/>
            </Link>
          </div>
        </div>

        <div className="center-section">
          <div className="search-container">
            <SearchBar />
          </div>
        </div>

        <div className="right-section">
          <div className="mobile-icons">
            <i 
              className={`pi pi-search mobile-search-icon ${searchOpen ? "active" : ""}`}
              onClick={toggleSearch}
            />
            <img src={miniCart} alt="Carrinho" className="cart-icon" />
          </div>

          <div className="desktop-auth">
            <Link to="/register" className="register-link">Cadastre-se</Link>
            <Link to="/login" className="login-button">
              <span className="login-link">Entrar</span>
            </Link>
            <img src={miniCart} alt="Carrinho" className="cart-icon" />
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="mobile-search-container">
          <SearchBar />
        </div>
      )}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">
          <MenuBar />
          <div className="menu-divider"></div>
          <div className="mobile-auth">
            <Link to="/register" className="register-link">Cadastre-se</Link>
            <Link to="/login">
              <span className="login-link">Entrar</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="menu-bar-desktop">
        <MenuBar />
      </div>
    </div>
  );
}