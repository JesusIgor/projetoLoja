import styled from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #003366;
    padding: 10px;
`;

export const Button = styled.button<{ active?: boolean }>`
    background-color: ${({ active }) => (active ? '#f97132' : '#003366')};
    color: ${({ active }) => (active ? 'white' : 'white')};
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #f97132;
        color: #003366;
    }
`;