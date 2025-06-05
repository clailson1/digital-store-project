import Layout from "./Layout";
import "../styles/NotFoundPage.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (  
        <Layout>
            <div className="not-found-main-div">
                <h4>Página não encontrada!</h4>
                <Link to="/">
                    <Button variant="primary" className="btn-inicio">Voltar para o início</Button>
                </Link>
            </div>
        </Layout>
    );
}
 
export default NotFoundPage;