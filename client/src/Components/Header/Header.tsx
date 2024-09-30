import React from 'react';
import { HeaderContainer, Logo, SearchBar, LoginButton } from './style';



const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo>Logo da Loja</Logo>
            <SearchBar type="text" placeholder="Pesquisar camisa..." />
            <LoginButton>Login</LoginButton>
        </HeaderContainer>
    );
};

export default Header;