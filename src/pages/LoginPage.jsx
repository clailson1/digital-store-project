import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../core/Api";
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import Layout from "./Layout";

const LoginPage = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        
        try {
            const response = await Api.post('/v1/login', {
                username: login,
                password: senha
            });
            
            const { token } = response.data;
            
            // Armazena o token no localStorage
            localStorage.setItem('token', token);
            
            // Redireciona para a home
            navigate('/');
        } catch (error) {
            alert("Login ou senha inválida!");
            console.error("Erro no login:", error);
        }
    }

    return (  
        <Layout>
            <Container>
                <Row className="mt-5">
                    <Col md={{span: 4, offset: 4}}>
                        <form onSubmit={handleLogin}> {/* Mudei para onSubmit */}
                            <h2 className="text-center mb-4">Login</h2>
                            <div className="mt-3">
                                <Form.Label>Email</Form.Label> 
                                <Form.Control type='text' value={login} onChange={e => setLogin(e.target.value)}/>
                            </div>
                            <div className="mt-3">
                                <Form.Label>Senha</Form.Label> 
                                <Form.Control type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                            </div> 
                            <div className="mt-3 mb-5">
                                <Button variant='primary' type="submit"> {/* Mudei para type="submit" */}
                                    Acessar
                                </Button>
                            </div>
                        </form>                
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}
 
export default LoginPage;