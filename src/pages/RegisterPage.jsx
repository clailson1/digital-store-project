import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../core/Api";
import { Row, Col, Container, Form, Button, Alert } from 'react-bootstrap'
import Layout from "./Layout";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    async function handleRegister(e) {
        e.preventDefault();
        
        // Validação dos campos
        if (!formData.firstname || !formData.surname || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('Todos os campos são obrigatórios!');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('As senhas não coincidem!');
            return;
        }

        try {
            const response = await Api.post('/v1/user', {
                firstname: formData.firstname,
                surname: formData.surname,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword
            });
            
            if (response.status === 201) {
                setSuccess('Usuário cadastrado com sucesso!');
                setError('');
                // Redireciona para a home após 2 segundos
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
        } catch (error) {
            console.error("Erro no cadastro:", error);
            setError(error.response?.data?.message || 'Erro ao cadastrar usuário!');
            setSuccess('');
        }
    }

    return (  
        <Layout>
            <Container>
                <Row className="mt-5">
                    <Col md={{span: 6, offset: 3}}>
                        <h2 className="text-center mb-4">Cadastre-se</h2>
                        
                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}
                        
                        <Form onSubmit={handleRegister}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="firstname" 
                                    value={formData.firstname} 
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                                <Form.Label>Sobrenome</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="surname" 
                                    value={formData.surname} 
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    name="password" 
                                    value={formData.password} 
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                                <Form.Label>Confirme sua Senha</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    name="confirmPassword" 
                                    value={formData.confirmPassword} 
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            
                            <div className="d-grid gap-2 mb-5">
                                <Button variant="primary" type="submit">
                                    Cadastrar
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
        
    );
}
 
export default RegisterPage;