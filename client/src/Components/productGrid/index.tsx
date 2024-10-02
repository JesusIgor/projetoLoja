import React from 'react';
import { Product } from '../../types'; // Importando o tipo do arquivo types.ts
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

interface ProductsGridProps {
    data: Product[];
    category: string; 
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ data, category }) => {
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
                    <Link to={`/category/${category}/${product.id}`}>
                    <Card
                            hoverable
                            cover={<img alt={product.name} src={product.imageUrl} style={{ height: '200px', objectFit: 'cover' }} />} // Definindo uma altura fixa para a imagem
                            style={{ minHeight: '300px' }} // Definindo uma altura mínima para o Card
                        >
                            <Card.Meta title={product.name} description={`R$ ${product.price.toFixed(2)}`} />
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );
};

export default ProductsGrid;