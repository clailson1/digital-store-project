import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menus = styled.div`
	& nav {
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: start;
		align-items: center;
	}

	& nav ul {
		display: flex;
		gap: 30px;
		list-style: none;
		margin-top: 0;
		margin-left: 60px;
		& li a {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #666666;
			font-size: 14px;
			text-decoration: none;
			&:hover,
			&.active {
				color: #c92071;
				border-radius: 4px;
				text-decoration: underline;
				text-decoration-thickness: 2px;
				text-underline-offset: 5px;
				font-weight: bold;
			}
		}
	}

	@media (max-width: 768px) {
		& nav {
			height: auto;
			padding: 0;
		}

		& nav ul {
			flex-direction: column;
			gap: 0.5rem;
			margin-left: 0;
			width: 100%;
		}
	}
`;

export default function MenuBar() {
	return (
		<Menus>
			<nav>
				<ul>
					<li>
						<NavLink to={"/"} className="linkHome">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to={"/produtos"} className="linkProdutos">
							Produtos
						</NavLink>
					</li>
					<li>
						<NavLink to={"/categorias"} className="linkCategorias">
							Categorias
						</NavLink>
					</li>
					<li>
						<NavLink to={"/pedidos"} className="linkPedidos">
							Meus Pedidos
						</NavLink>
					</li>
				</ul>
			</nav>
		</Menus>
	);
}
