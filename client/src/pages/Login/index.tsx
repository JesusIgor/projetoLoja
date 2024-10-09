import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Title, SubTitle, ForgotPasswordLink  } from './style';
import { Button, Input, message } from 'antd';
import { useAuthContext } from '../../Context/AuthProvider';
import Welcome from '../UserInfo';
const Login: React.FC = () => {
    const navigate = useNavigate();
    const { currentUser, login, register, logout, forgotPassword  } = useAuthContext();
    const [form, setForm] = useState({
        nome: '',
        sobrenome: '',
        usuario: '',
        senha: '',
    });

    const [forgotPasswordUser, setForgotPasswordUser] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showForm, setShowForm] = useState<'login' | 'register' | 'forgotPassword'>('login');

    const handleLogin = () => {
        const isLoggedIn = login(form.usuario, form.senha);
        if (isLoggedIn) {
            navigate('/');
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
            message.success('Usuário cadastrado com sucesso!');
            navigate('/');
        } else {
            message.error('Preencha todos os campos.');
        }
    };

    const handleForgotPassword = () => {
        if (forgotPasswordUser && newPassword) {
            forgotPassword(forgotPasswordUser, newPassword);
        } else {
            message.error('Preencha todos os campos.');
        }
    };
    return (
        <div style={{ 
            backgroundColor: '#f4f4f4', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '73vh' }}>
            {currentUser ? (
                <div style={{backgroundColor: '#f4f4f4', height: '90vhs'}}>
                <Welcome></Welcome>
                </div>
            ) : (
                <div style={{ display: 'flex', backgroundColor: '#f4f4f4', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                    <div style={{
                        height: '100%',  backgroundColor: '#f4f4f4'}}>
                        {showForm === 'login' && (
                <div style={{backgroundColor: '#f4f4f4', height: '90vhs'}}>
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
                                <Button type="primary" onClick={handleLogin} style={{ backgroundColor: '#003366', color: 'white', marginBottom: '10px' }}>
                                    Entrar
                                </Button>
                                <div style={{ textAlign: 'center' }}>
                                    <ForgotPasswordLink onClick={() => setShowForm('forgotPassword')}>
                                        Esqueceu sua senha?
                                    </ForgotPasswordLink>
                                    <br />
                                    <ForgotPasswordLink onClick={() => setShowForm('register')}>
                                        Registrar-se
                                    </ForgotPasswordLink>
                                </div>
                            </Form>
                            </div>
                        )}
                        {showForm === 'register' && (
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
                                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                    <ForgotPasswordLink onClick={() => setShowForm('login')}>
                                        Voltar para o login
                                    </ForgotPasswordLink>
                                </div>
                            </Form>
                        )}
                        {showForm === 'forgotPassword' && (
                            <Form>
                                <Title>Redefinir Senha</Title>
                                <Input
                                    placeholder="Usuário"
                                    onChange={(e) => setForgotPasswordUser(e.target.value)}
                                    style={{ marginBottom: '10px' }}
                                />
                                <Input.Password
                                    placeholder="Nova senha"
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    style={{ marginBottom: '10px' }}
                                />
                                <Button type="default" onClick={handleForgotPassword} style={{ backgroundColor: '#ffcc00', color: '#003366' }}>
                                    Redefinir Senha
                                </Button>
                                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                    <ForgotPasswordLink onClick={() => setShowForm('login')}>
                                        Voltar para o login
                                    </ForgotPasswordLink>
                                </div>
                            </Form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;