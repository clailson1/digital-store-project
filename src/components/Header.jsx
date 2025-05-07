import Logo from "./Logo";
import "../styles/Header.css"
import miniCart from '../assets/mini-cart.svg';


const Header = () => {
    return ( 
        <div className="header-div">
            <div className="flex">
                <Logo />
            </div>
            <div id="search-bar" className="search-container">
                <input 
                    type="text" 
                    id="search" 
                    name="search"
                    placeholder="Pesquisar Produto..."
                    className="search-input"
                />
                <i 
                    className="pi pi-search search-icon" 
                />
            </div>
            <div className="register-login">
                <a 
                    href=""
                    className="register-link"
                >
                    Cadastre-se
                </a>
                <div className="login-button">
                <a 
                    href=""
                    className="login-link"
                >
                    Entrar
                </a>
            </div>
            </div>
            
            <div>
                <img src={miniCart} alt="" />
            </div>
        </div>
    );
}
 
export default Header;