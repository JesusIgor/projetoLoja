import styled from 'styled-components';
import { Card, Button } from 'antd';

export const ProductDetailContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f4f4f4;
`;

export const StyledCard = styled(Card)`
    width: 50%;
    margin: 20px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: 1px solid #003366;

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (min-width: 1200px) {
        width: 40%;
    }
`;

export const ProductImage = styled.img`
    width: 100%;
    height: auto; 
    max-width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    display: block; 
`;

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

export const BuyButton = styled(Button)`
    background-color: #003366;
    color: white;
    width: 100%;
    height: 100%;
    margin-top: 10px;

    &:hover {
        background-color: #f97132; // Cor do hover
    }
`;