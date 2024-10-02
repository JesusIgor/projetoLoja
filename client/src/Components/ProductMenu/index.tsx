import React from 'react';
import { useProducts } from '../../Context/ProductsContext';
import { useNavigate } from 'react-router-dom';
import { MenuContainer, Button } from './style';

const ProductMenu: React.FC = () => {
    const { categories } = useProducts();
    const navigate = useNavigate();

    return (
        <MenuContainer>
            
            {Object.keys(categories).map((category) => (
                <Button
                    key={category}
                    onClick={() => navigate(`/category/${category}`)}
                    // style={{
                    //     backgroundColor: '#003366',
                    //     color: 'white',
                    //     padding: '10px 20px',
                    //     margin: '0 10px',
                    //     border: 'none',
                    //     cursor: 'pointer',
                    // }}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
            ))}
        </MenuContainer>
    );
};

export default ProductMenu;