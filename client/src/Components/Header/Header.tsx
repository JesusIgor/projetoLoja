import React from 'react';
import { HeaderContainer} from './style';
import { useNavigate, Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../Context/AuthProvider';


const Header: React.FC = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuthContext();


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
                <TextField
                    variant="outlined"
                    placeholder="Pesquisar..."
                    fullWidth
                    size="small" // Tamanho pequeno para ficar mais discreto
                    sx={{
                        backgroundColor: '#fff', // Cor de fundo da barra de pesquisa
                        borderRadius: '4px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#ccc', // Cor da borda
                            },
                            '&:hover fieldset': {
                                borderColor: '#007bff', // Cor da borda ao passar o mouse
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#007bff', // Cor da borda quando focado
                            },
                        },
                    }}
                />
            </div>
            <div style={{width:"20%", display:"flex", justifyContent:"center", gap:"5px"}}>
            <IconButton onClick={() => navigate('/cart')} >
                <ShoppingCartIcon style={{color:"#003366"}} />
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
