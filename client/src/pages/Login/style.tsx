import styled from 'styled-components';
import { Card } from 'antd';

export const Container = styled(Card)`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #f9f9f9; // Cor de fundo da tela
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    color: #003366; // Cor do texto do título
`;

export const SubTitle = styled.h2`
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    color: #003366; // Cor do texto do subtítulo
`;