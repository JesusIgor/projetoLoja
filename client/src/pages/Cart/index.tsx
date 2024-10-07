import React from 'react';
import { useCart } from '../../Context/CartContext';
import { Card, List, Button, notification } from 'antd';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { CartItem } from '../../types'; // Certifique-se de ter a definição de CartItem

// Estilo para o Container do Carrinho
const CartContainer = styled(Card)`
    width: 100%;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;

const ProductImage = styled.img`
    height: 50px;
    width: 50px;
    object-fit: cover;
    margin-right: 10px;
`;

const RemoveButton = styled(Button)`
    color: #f97132;
    border: none;

    &:hover {
        color: #ff4d4f;
    }
`;

const ClearCartButton = styled(Button)`
    color: #f97132;
    border: none;
    margin-top: 20px;

    &:hover {
        color: #ff4d4f;
    }
`;

const CheckoutButton = styled(Button)`
    background-color: #003366;
    color: white;
    width: 100%;
    margin-top: 20px;

    &:hover {
        background-color: #004080;
    }
`;

const Cart: React.FC = () => {
    const { cartItems, removeFromCart, addToCart, clearCart } = useCart();

    const handleRemove = (productId: number) => {
        removeFromCart(productId);
        // notification.error({
        //     message: 'Item Removido',
        //     description: 'O item foi removido do carrinho com sucesso.',
        //     icon: <CloseOutlined style={{ color: '#ff4d4f' }} />,
        // });
    };

    const handleClearCart = () => {
        clearCart();
        // Função para limpar o carrinho
        notification.success({
            message: 'Carrinho Limpo',
            description: 'Todos os itens foram removidos do carrinho.',
            icon: <CloseOutlined style={{ color: '#52c41a' }} />,
        });
    };

    const handleCheckout = () => {
        window.location.href = '/order-completed'; // Mude esta linha para usar o React Router se necessário
    };

    const totalAmount = cartItems.reduce((total:number, item: CartItem) => total + item.product.price * item.quantity, 0);

    return (
        <CartContainer title="Carrinho de Compras">
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <>
                    <List
                        dataSource={cartItems}
                        renderItem={(item: CartItem) => (
                            <List.Item
                                actions={[
                                    <Button type="link" onClick={() => addToCart(item.product)}>+</Button>,
                                    <div>{item.quantity}</div>,
                                    <Button type="link" onClick={() => handleRemove(item.product.id)}>-</Button>,
                                    <RemoveButton
                                        type="link"
                                        onClick={() => handleRemove(item.product.id)}
                                    >
                                        Remover Todo
                                    </RemoveButton>,
                                ]}
                            >
                                <ProductImage alt={item.product.name} src={item.product.imageUrl} />
                                <div style={{ flex: 1 }}>
                                    <strong>{item.product.name}</strong> - R$ {item.product.price.toFixed(2)} - Quantidade: {item.quantity}
                                </div>
                            </List.Item>
                        )}
                    />
                    <ClearCartButton type="link" onClick={handleClearCart}>
                        Limpar Carrinho
                    </ClearCartButton>
                    <div style={{ fontWeight: 'bold', marginTop: '10px' }}>
                        Total: R$ {totalAmount.toFixed(2)}
                    </div>
                </>
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