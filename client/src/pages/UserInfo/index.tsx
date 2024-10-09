import React, { useState } from 'react';
import { Form, Title, InfoField, InfoWrapper } from './style'; 
import { Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useAuthContext } from '../../Context/AuthProvider';

const Welcome: React.FC = () => {
    const { currentUser, logout } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false);

    if (!currentUser) {
        return null;
    }

    return (
        <Form style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', backgroundColor: '#f4f4f4', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Title>Informações do Cliente</Title>
            <InfoWrapper>
                <InfoField><strong>Nome:</strong> {currentUser.nome}</InfoField>
                <InfoField><strong>Sobrenome:</strong> {currentUser.sobrenome}</InfoField>
                <InfoField><strong>Usuário:</strong> {currentUser.usuario}</InfoField>
                <InfoField>
                    <strong>Senha:</strong> 
                    <Input.Password
                        value={currentUser.senha}
                        style={{ marginLeft: '10px', maxWidth: '200px' }}
                        iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                        visibilityToggle={showPassword}
                        onClick={() => setShowPassword(!showPassword)}
                    />
                </InfoField>
            </InfoWrapper>
            <Button type="primary" onClick={logout} style={{ backgroundColor: '#003366', color: '#fff', marginTop: '20px' }}>
                Sair
            </Button>
        </Form>
    );
};

export default Welcome;