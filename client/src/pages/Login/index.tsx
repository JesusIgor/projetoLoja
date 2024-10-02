import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Title, SubTitle } from './style';
import { Button, Input, message } from 'antd';
import { useAuthContext } from '../../Context/AuthProvider';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { currentUser, login, register, logout } = useAuthContext();
    const [form, setForm] = useState({
        nome: '',
        sobrenome: '',
        usuario: '',
        senha: '',
    });

    const handleLogin = () => {
        const isLoggedIn = login(form.usuario, form.senha);
        if (isLoggedIn) {
            navigate('/'); // Redirecionar para a página inicial
        } else {
            message.error('Usuário ou senha inválidos!');
        }
    };

    const handleRegister = () => {
        if (form.nome && form.sobrenome && form.usuario && form.senha) {
            register({
                nome: form.nome,
                sobrenome: form.sobrenome,
                usuario: form.usuario,
                senha: form.senha,
            });
        } else {
            message.error('Preencha todos os campos.'); // Mostrar erro se algum campo estiver vazio
        }
    };


    return (
        <div style={{ backgroundColor: '#f4f4f4', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '73vh' }}>
            {currentUser ? (
                <Form>
                    <Title>Bem-vindo, {currentUser.nome}</Title>
                    <Button type="primary" onClick={logout}>Sair</Button>
                </Form>
            ) : (
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%' }}>
                    <div>
                        <Form>
                            <Title>Login</Title>
                            <Input
                                placeholder="Usuário"
                                onChange={(e) => setForm({ ...form, usuario: e.target.value })}
                                style={{ marginBottom: '10px' }}
                            />
                            <Input.Password
                                placeholder="Senha"
                                onChange={(e) => setForm({ ...form, senha: e.target.value })}
                                style={{ marginBottom: '20px' }}
                            />
                            <Button type="primary" onClick={handleLogin} style={{ backgroundColor: '#003366', color: 'white' }}>
                                Entrar
                            </Button>
                        </Form>
                    </div>
                    <div>
                        <Form>
                            <SubTitle>Cadastro</SubTitle>
                            <Input
                                placeholder="Nome"
                                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                                style={{ marginBottom: '10px' }}
                            />
                            <Input
                                placeholder="Sobrenome"
                                onChange={(e) => setForm({ ...form, sobrenome: e.target.value })}
                                style={{ marginBottom: '10px' }}
                            />
                            <Input
                                placeholder="Usuário"
                                onChange={(e) => setForm({ ...form, usuario: e.target.value })}
                                style={{ marginBottom: '10px' }}
                            />
                            <Input.Password
                                placeholder="Senha"
                                onChange={(e) => setForm({ ...form, senha: e.target.value })}
                                style={{ marginBottom: '20px' }}
                            />
                            <Button type="primary" onClick={handleRegister} style={{ backgroundColor: '#003366', color: 'white' }}>
                                Cadastrar
                            </Button>
                        </Form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;