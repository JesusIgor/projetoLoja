import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: #f4f4f4; /* Cor de fundo mais clara */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Sombra na container */
    border-radius: 8px; /* Bordas arredondadas */
`;

export const Button = styled.button<{ active?: boolean }>`
    background-color: ${({ active }) => (active ? '#f97132' : '#003366')}; /* Azul se ativo, cinza se não */
    color: ${({ active }) => (active ? 'white' : 'white')}; /* Dourado se ativo, azul se não */
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 0 10px; /* Espaçamento entre os botões */
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #f97132; /* Dourado ao passar o mouse */
        color: #003366; /* Azul ao passar o mouse */
    }
`;