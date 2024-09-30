import React from 'react';
import { Product } from '../../types'; // Importando o tipo do arquivo types.ts
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

interface ProductsGridProps {
    data: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ data }) => {
    return (
        <Row gutter={[16, 16]} style={{height:"100%", backgroundColor: "gray"}}>
            {data.map(product => (
                <Col
                    xs={24}  // Ocupa a tela inteira em telas muito pequenas (1 por linha)
                    sm={12}  // 2 colunas por linha em telas pequenas
                    md={6}   // 3 colunas por linha em telas médias
                    lg={4}   // 4 colunas por linha em telas grandes
                    key={product.id}
                >
                <Link to={`/product/${product.id}`}>

                    <Card
                        hoverable
                        cover={<img alt={product.name} src={product.imageUrl} />} // Definindo uma altura fixa para a imagem
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