import React, { useState } from 'react';
import { useProducts } from '../../Context/ProductsContext';
import Header from '../../Components/Header/Header';
import ProductsGrid from '../../Components/productGrid';
import { Container } from './style';

const Home: React.FC = () => {
    const { shirts, shoes } = useProducts();
    const [displayProducts, setDisplayProducts] = useState<'shirts' | 'shoes'>('shoes'); // Controlar o que será exibido

    const productsToDisplay = displayProducts === 'shirts' ? shirts : shoes;

    return (
            <Container>
                <h1>{displayProducts === 'shirts' ? 'Camisas' : 'Chuteiras'}</h1>
                <ProductsGrid data={productsToDisplay} />
            </Container>
    );
};

export default Home;