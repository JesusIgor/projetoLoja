import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LaunchImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px; /* Arredondar bordas */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra mais forte */
    transition: transform 0.3s; /* Transição suave ao passar o mouse */
    
    &:hover {
        transform: scale(1.05); /* Aumenta a imagem ao passar o mouse */
    }
`;

const LaunchesSection: React.FC = () => {
    const launches = [
        { id: 1, imageUrl: 'https://via.placeholder.com/200x200', category: 'camisas', name: 'Camisa 1' },
        { id: 2, imageUrl: 'https://via.placeholder.com/200x200', category: 'chuteiras', name: 'Chuteira 1' },
        { id: 3, imageUrl: 'https://via.placeholder.com/200x200', category: 'acessórios', name: 'Acessório 1' },
        { id: 4, imageUrl: 'https://via.placeholder.com/200x200', category: 'calças', name: 'Calça 1' },
        { id: 5, imageUrl: 'https://via.placeholder.com/200x200', category: 'calças', name: 'Calça 1' },
        { id: 6, imageUrl: 'https://via.placeholder.com/500x250', category: 'calças', name: 'Calça 1' }, 

    ];

    return (
        <div style={{ padding: '20px 0', textAlign: 'center', height: '100%', width: '100%' }}>
            <h2>Lançamentos</h2>
                <div style={{ display: 'flex', flexDirection:"column", alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <div style={{  display: 'flex', gap: '1em',  width: '90%'}}>
                    {launches.slice(0, 5).map(product => (
                        <div style={{ display: 'flex', flexDirection:"row",width:'100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Link to={`/category/${product.category}/${product.id}`}>
                            <LaunchImage
                            style={{ width: '100%', objectFit: 'cover', borderRadius:"50%" }}	
                                    src={product.imageUrl}
                                    alt={product.name}
                                />
                            </Link>
                        </div>
                    ))}
                    </div>
       
                    <div style={{width: '100%'}}>
                    <div style={{ display: 'flex', gap:"1em", margin: "1em 0", flexDirection:"row",width:'100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Link to={`/category/${launches[5].category}/${launches[3].id}`}>
                            <LaunchImage
                                src={launches[5].imageUrl}
                                alt={launches[5].name}
                            />
                        </Link>
                        <Link to={`/category/${launches[5].category}/${launches[3].id}`}>
                            <LaunchImage
                                src={launches[5].imageUrl}
                                alt={launches[5].name}
                            />
                        </Link>
                        </div>
                        <div style={{ display: 'flex', gap:"1em", flexDirection:"row",width:'100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Link to={`/category/${launches[5].category}/${launches[3].id}`}>
                            <LaunchImage
                           src={launches[5].imageUrl}
                           alt={launches[5].name}
                            />
                        </Link>
                        <Link to={`/category/${launches[5].category}/${launches[3].id}`}>
                            <LaunchImage
                       src={launches[5].imageUrl}
                       alt={launches[5].name}
                            />
                        </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default LaunchesSection;