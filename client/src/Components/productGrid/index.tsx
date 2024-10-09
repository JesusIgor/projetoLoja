import React from 'react';
import { Product } from '../../types'; // Importando o tipo do arquivo types.ts
import { Card, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import { notification, Button } from 'antd';


interface ProductsGridProps {
    data: Product[];
    category: string; 
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ data, category }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const openNotification = (data: string) => {
        notification.success({
            message: 'Produto adicionado',
            description: `${data} foi adicionado ao carrinho.`,
            placement: 'topRight',
            duration: 3,
        });
    };


    const handleAddToCart = (product: Product) => {
        addToCart(product);
        openNotification(product.name); 
    };
    return (
        <Row gutter={[16, 16]} style={{ height: "100%", backgroundColor: "#f4f4f4" }}>
            {data.map(product => (
                <Col
                    key={product.id} 
                    xs={12} 
                    sm={8}
                    md={6}  
                    lg={4} 
                >
                    <Card
                        hoverable
                        cover={
                                <img 
                                    alt={product.name} 
                                    src={product.imageUrl} 
                                    style={{ height: '200px', objectFit: 'cover' }} 
                                    onClick={() => navigate(`/category/${category}/${product.id}`)}
                                />
                        
                        } 
                        style={{ minHeight: '300px' }} 
                    >
                        <Card.Meta title={product.name} description={`R$ ${product.price.toFixed(2)}`} />
                        <Button onClick={() => handleAddToCart(product)} style={{ marginTop: '1em' }}>Comprar</Button>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ProductsGrid;