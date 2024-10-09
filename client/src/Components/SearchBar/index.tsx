import React, { useState, useEffect, useRef } from 'react';
import { TextField, ListItemText } from '@mui/material';
import { useProducts } from '../../Context/ProductsContext';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

const SearchBar: React.FC = () => {
    const { categories } = useProducts();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
    const [menuVisible, setMenuVisible] = useState(false);
    const navigate = useNavigate();
    const searchRef = useRef<HTMLDivElement>(null); 
    
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredProducts([]);
            setMenuVisible(false);
            return;
        }

        const allProducts = Object.values(categories).flat();
        const results = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
            product.marca.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
        setMenuVisible(results.length > 0);
    }, [searchTerm, categories]);

    const handleProductClick = (product: any) => {
        navigate(`/category/${product.category}/${product.id}`);
        setSearchTerm(''); 
        setMenuVisible(false);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
            setMenuVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%' }} ref={searchRef}>
            <TextField
                variant="outlined"
                placeholder="Pesquisar..."
                fullWidth
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#ccc' },
                        '&:hover fieldset': { borderColor: '#007bff' },
                        '&.Mui-focused fieldset': { borderColor: '#007bff' },
                    },
                }}
            />
            {menuVisible && (
                <Menu
                    style={{
                        position: 'absolute',
                        top: '40px',
                        width: '100%',
                        backgroundColor: '#fff',
                        zIndex: 10,
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        overflowY: 'auto',
                        maxHeight: '250px',
                    }}
                >
                    {filteredProducts.map(product => (
                        <Menu.Item
                            key={product.id}
                            onClick={() => handleProductClick(product)}
                            style={{
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                margin: '10px 0',
                                padding: '10px',
                                maxWidth: '100%',
                            }}
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                style={{ width: '40px', height: '40px', marginRight: '10px' }}
                            />
                            <ListItemText 
                                primary={product.name} 
                                secondary={`R$ ${product.price.toFixed(2)}`} 
                                sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} // Adiciona elipse em nomes longos
                            />
                        </Menu.Item>
                    ))}
                </Menu>
            )}
        </div>
    );
};

export default SearchBar;