import { useState } from "react";
import miniCart from "../assets/mini-cart.svg";
import Logo from "./Logo";
import "../styles/Header.css";
import MenuBar from "./MenuBar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-div">
      <div className="top-bar">
        <Logo />

        <div id="search-bar" className="search-container">
          <input 
            type="text" 
            id="search" 
            name="search"
            placeholder="Pesquisar Produto..."
            className="search-input"
          />
          <i className="pi pi-search search-icon" />
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>

        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <div className="mobile-menu-content">
            <MenuBar />
            <div className="mobile-auth">
              <a href="" className="register-link">Cadastre-se</a>
              <div className="login-button">
                <a href="" className="login-link">Entrar</a>
              </div>
            </div>
          </div>
        </div>

        <div className="desktop-auth">
          <a href="" className="register-link">Cadastre-se</a>
          <div className="login-button">
            <a href="" className="login-link">Entrar</a>
          </div>
          <img src={miniCart} alt="Carrinho" className="cart-icon" />
        </div>
      </div>

      {/* MenuBar apenas para desktop */}
      <div className="menu-bar-desktop">
        <MenuBar />
      </div>
    </div>
  );
}