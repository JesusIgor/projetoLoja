import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home'); // Redireciona para a home após o login
    };

    return (
        <Container>
            <h1>Login</h1>
            <button onClick={handleLogin}>Entrar</button>
        </Container>
    );
};

export default Login;