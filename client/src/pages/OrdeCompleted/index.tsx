import React from 'react';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import { CheckCircleOutlined } from '@ant-design/icons';

// Estilo para a página de pedido concluído
const CompletedContainer = styled(Card)`
    width: 100%;
    height: 100%;
    margin: 20px auto;
    text-align: center;
    background-color: #fff; // Cor de fundo correspondente ao resto do app
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Estilo para o ícone
const CheckIcon = styled(CheckCircleOutlined)`
    color: #28a745; // Cor verde para o ícone
    font-size: 48px; // Tamanho do ícone
    margin-bottom: 20px; // Margem abaixo do ícone
`;

const OrderCompleted: React.FC = () => {
    const handleContinueShopping = () => {
        window.location.href = '/'; // Redirecionar para a página inicial
    };

    return (
        <div style={{ height: '100%' }}>
            <CompletedContainer title="Pedido Concluído">
                <CheckIcon />
                <p>Obrigado pela sua compra!</p>
                <p>Seu pedido foi recebido com sucesso.</p>
                <p>Acompanhe seu pedido pelo seu e-mail.</p>
                <Button style={{backgroundColor: '#f97132', color: '#fff'}} type="primary" onClick={handleContinueShopping}>
                    Continuar Comprando
                </Button>
            </CompletedContainer>
        </div>
    );
};

export default OrderCompleted;