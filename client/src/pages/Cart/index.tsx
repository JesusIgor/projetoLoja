import React from 'react';
import { useCart } from '../../Context/CartContext';
import { Card, List, Button, notification } from 'antd';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { Product } from '../../types';

// Estilo para o Container do Carrinho
const CartContainer = styled(Card)`
    width: 100%;
    margin: 20px auto;
    background-color: #fff; // Cor do fundo do carrinho
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); // Sombra mais suave
`;

// Estilo para a imagem do produto no carrinho
const ProductImage = styled.img`
    height: 50px;
    width: 50px;
    object-fit: cover;
    margin-right: 10px;
`;

// Estilo para o botão de remover
const RemoveButton = styled(Button)`
    color: #f97132; // Cor do texto do botão
    border: none;

    &:hover {
        color: #ff4d4f; // Cor ao passar o mouse
    }
`;

// Estilo para o botão de finalizar pedido
const CheckoutButton = styled(Button)`
    background-color: #003366; // Cor de fundo do botão
    color: white;
    width: 100%;
    margin-top: 20px;

    &:hover {
        background-color: #004080; // Cor ao passar o mouse
    }
`;

const Cart: React.FC = () => {
    const { cartItems, removeFromCart } = useCart();

    const handleRemove = (itemId: number, category: string) => {
        removeFromCart(itemId, category);
        notification.error({
            message: 'Item Removido',
            description: 'O item foi removido do carrinho com sucesso.',
            icon: <CloseOutlined style={{ color: '#ff4d4f' }} />, // Ícone vermelho de erro
        });
    };

    const handleCheckout = () => {
        // Redirecionar para a página de pedido concluído
        window.location.href = '/order-completed'; // Mude esta linha para usar o React Router se necessário
    };

    return (
        <CartContainer title="Carrinho de Compras">
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <List
                    dataSource={cartItems}
                    renderItem={(item: Product) => (
                        <List.Item
                            actions={[
                                <RemoveButton
                                    type="link"
                                    onClick={() => {
                                        // Verifique se a categoria está definida antes de chamar handleRemove
                                        if (item.category) {
                                            handleRemove(item.id, item.category);
                                        } else {
                                            notification.error({
                                                message: 'Erro',
                                                description: 'A categoria do item não está definida.',
                                            });
                                        }
                                    }}
                                >
                                    Remover
                                </RemoveButton>,
                            ]}
                        >
                            <ProductImage alt={item.name} src={item.imageUrl} />
                            <div style={{ flex: 1 }}>
                                <strong>{item.name}</strong> - R$ {item.price.toFixed(2)}
                            </div>
                        </List.Item>
                    )}
                />
            )}
            {cartItems.length > 0 && (
                <CheckoutButton type="primary" onClick={handleCheckout}>
                    Finalizar Pedido
                </CheckoutButton>
            )}
        </CartContainer>
    );
};

export default Cart;