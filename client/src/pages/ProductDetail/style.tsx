// style.ts
import styled from 'styled-components';
import { Card, Button } from 'antd';

// Container principal para a página de detalhes
export const ProductDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f4f4f4; // Fundo da página
`;

// Estilização do Card do Ant Design
export const StyledCard = styled(Card)`
    width: 50%;
    margin: 20px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: 1px solid #003366; // Borda do card

    @media (max-width: 768px) {
        width: 90%; // Tornar responsivo para telas menores
    }
`;

// Estilo da imagem do produto
export const ProductImage = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`;

// Estilo do botão personalizado para o Carrinho
export const CartButton = styled.button`
    background-color: #003366;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;

`;

// Estilo do botão de compra
export const BuyButton = styled(Button)`
    background-color: #003366; // Cor do botão
    color: white;
    width: 100%;
    margin-top: 10px;

    &:hover {
        background-color: #f97132; // Cor do hover
    }
`;