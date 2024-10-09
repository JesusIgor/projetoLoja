import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    height: 9vh;
    gap:2em;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: white;
    color: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    font-family: 'Roboto', sans-serif;
    
    .logo_responsive img {
        display: none;
    }

    .logo img {
        display: flex;
    }

    @media (max-width: 768px) {
        .logo img {
            display: none;
        }
        .logo_responsive img {
            display: flex;
        }
    }
}
`;

export const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #FFD700; /* Dourado */
`;

export const NavButton = styled.button`
    background: none;
    border: none; /* Remove a borda padrão */
    color: white;
    font-size: 18px;
    cursor: pointer;
    position: relative;
    transition: color 0.3s;

    /* Adicionando sombra ao passar o mouse */
    &:hover {
        color: #FFD700; /* Dourado */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); /* Sombra ao passar o mouse */
    }
`;

export const DropdownArrow = styled.span`
    margin-left: 5px;
    font-size: 14px; /* Tamanho da setinha */
`;



export const LoginButton = styled.button`
    background-color: #FFD700; /* Dourado */
    color: #003366; /* Azul */
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ffcc00; /* Um tom mais claro de dourado */
    }
`;