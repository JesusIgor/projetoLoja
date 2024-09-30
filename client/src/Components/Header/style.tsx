import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: white;
`;

export const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const SearchBar = styled.input`
    width: 300px;
    padding: 10px;
    border-radius: 5px;
    border: none;
`;

export const LoginButton = styled.button`
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;