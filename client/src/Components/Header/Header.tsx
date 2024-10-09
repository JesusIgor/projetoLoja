import  {useState, useEffect} from 'react';
import React from 'react';
import { HeaderContainer} from './style';
import { useNavigate, Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../Context/AuthProvider';
import  SearchBar  from '../SearchBar';
import { Badge } from 'antd'; 
import { useCart } from '../../Context/CartContext';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

const Header: React.FC = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuthContext();
    const { cartItems } = useCart();
    const { width, height } = useWindowSize();
    console.log(width, height);

    return (
        <HeaderContainer>
            <div style={{width:"20%", display:"flex", justifyContent:"center"}}>
            <Link to="/">
            {width <= 770 ? (
                <div className="logo_responsive" style={{ width: "100px", height: "100px", justifyContent: "center" }}>
                    <img 
                    style={{ width: "100%" }} src="/responsive-logo.png" alt="OnTrack" />
                </div>
                ) : (
                <div className="logo" style={{ width: "150px", height: "150px", justifyContent: "center" }}>
                    <img style={{ width: "100%" }} src="/logo-site.png" alt="OnTrack" />
                </div>
                )
            }
            </Link>
            </div>
            <div style={{ width: "50%", margin: "0 auto" }}>
                <SearchBar /> 
            </div>
            <div style={{width:"20%", display:"flex", justifyContent:"center", gap:"5px"}}>
                
            <IconButton onClick={() => navigate('/cart')} >
                <Badge count={cartItems.length} offset={[10, 0]} color="#f50"> 
                    <ShoppingCartIcon style={{ color: "#003366" }} />
                </Badge>
            </IconButton>
            <IconButton onClick={() => navigate('/login')}>
                <PersonIcon style={{color:"#003366"}}/>
                {width > 700 && (
                <span style={{marginLeft:"5px", color:"#003366", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"0.5em"}}>
                    {currentUser ? `Olá, ${currentUser.nome}` : 'Login'}
                </span>
                )
                }
            </IconButton>
            </div>
        </HeaderContainer>
    );
};

export default Header;
