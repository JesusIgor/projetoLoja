import React, { useState } from 'react';
import { useProducts } from '../../Context/ProductsContext';
import ProductsGrid from '../../Components/productGrid';
import { Container, Button } from './style';

const Home: React.FC = () => {
    // const { categories } = useProducts();
    // const [displayProducts, setDisplayProducts] = useState<'shirts' | 'shoes'>('shoes'); // Controlar o que será exibido

    // const productsToDisplay = displayProducts === 'shirts' ? shirts : shoes;

    return (
        <Container>
            {/* <div style={{ display:"flex", backgroundColor: "#003366", width:"100%", height:"3em" }}>
                <Button onClick={() => setDisplayProducts('shirts')} active={displayProducts === 'shirts'}>
                    Camisas
                </Button>
                <Button onClick={() => setDisplayProducts('shoes')} active={displayProducts === 'shoes'}>
                    Chuteiras
                </Button>
            </div> */}
            {/* <div style={{ padding: '30px 20px' }}>
            <ProductsGrid data={productsToDisplay} />
            </div> */}
        </Container>
    );
};

export default Home;