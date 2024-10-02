// Welcome.tsx
import React from 'react';
import { Form, Title } from './style';
import { Button } from 'antd';
import { useAuthContext } from '../../Context/AuthProvider';
interface User {
    id: string;
    nome: string;
}
const Welcome: React.FC = () => {
    const { currentUser, logout } = useAuthContext();

    return (
        <Form>
            <Title>Bem-vindo, {currentUser && currentUser.nome}</Title>
            <Button type="primary" onClick={logout}>Sair</Button>
        </Form>
    );
};

export default Welcome;