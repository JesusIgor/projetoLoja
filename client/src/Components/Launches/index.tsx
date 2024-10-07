import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const LaunchesSection: React.FC = () => {
    const launches = [
        { id: 1, imageUrl: 'https://via.placeholder.com/150', category: 'camisas', name: 'Camisa 1' },
        { id: 2, imageUrl: 'https://via.placeholder.com/150', category: 'chuteiras', name: 'Chuteira 1' },
        { id: 3, imageUrl: 'https://via.placeholder.com/150', category: 'acessórios', name: 'Acessório 1' },
        { id: 4, imageUrl: 'https://via.placeholder.com/150', category: 'calças', name: 'Calça 1' },
    ];

    return (
        <div style={{ padding: '20px 0' }}>
            <h2>Lançamentos</h2>
            <Row gutter={[16, 16]}>
                {launches.map(product => (
                    <Col key={product.id} xs={12} sm={8} md={6} lg={4}>
                        <Link to={`/category/${product.category}/${product.id}`}>
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                                }}
                            />
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default LaunchesSection;