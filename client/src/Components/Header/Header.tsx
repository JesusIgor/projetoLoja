import React from 'react';
import { HeaderContainer} from './style';
import { useNavigate, Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../Context/AuthProvider';
import  SearchBar  from '../SearchBar';
import { Badge } from 'antd'; // Importando o Badge do Ant Design
import { useCart } from '../../Context/CartContext';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuthContext();
    const { cartItems } = useCart(); // Obtendo os itens do carrinho do contexto


    return (
        <HeaderContainer>
            <div style={{width:"20%", display:"flex", justifyContent:"center"}}>
            <Link to="/">
                <div style={{width:"150px", height: "150px", display:"flex", justifyContent:"center"}}>
                    <img style={{width: "100%"}} src="logo-site.png" alt="OnTrack" />
                </div>
            </Link>
            </div>
            <div style={{ width: "50%", margin: "0 auto" }}>
                <SearchBar /> {/* Usando a barra de pesquisa aqui */}
            </div>
            <div style={{width:"20%", display:"flex", justifyContent:"center", gap:"5px"}}>
                
            <IconButton onClick={() => navigate('/cart')} >
            <Badge count={cartItems.length} offset={[10, 0]} color="#f50"> {/* Badge mostrando a quantidade */}
                <ShoppingCartIcon style={{ color: "#003366" }} />
            </Badge>
            </IconButton>
            <IconButton onClick={() => navigate('/login')}>
                <PersonIcon style={{color:"#003366"}}/>
            
            <span style={{marginLeft:"5px", color:"#003366", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"0.5em"}}>
                {currentUser ? `Olá, ${currentUser.nome}` : 'Login'}
            </span>
            </IconButton>
            </div>
        </HeaderContainer>
    );
};

export default Header;
