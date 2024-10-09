import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LaunchImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    transition: transform 0.3s; 
    
    &:hover {
        transform: scale(1.05); 
    }
`;

const LaunchesSection: React.FC = () => {
    const launches = [
        { 
            id: 2, 
            imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/calca_de_treino_arsenal_2025_13297_1_f81aab5dc23c6531c6590c3ee94e4797.jpg', 
            category: 'calças', 
            name: 'Calça Térmica' 
        },
        { 
            id: 2, 
            imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/camisa_italia_2025_camisa_ii_jogador_selecao_da_italia_13233_1_0d7cbad51dc86093141d169511873eae.jpg', 
            category: 'camisas', 
            name: 'Camisa Itália 2025' 
        },
        { 
            id: 3, 
            imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/camisa_estados_unidos_2025_camisa_i_13203_1_6f1f313c8b45e2484c967cb896b0c5e6.jpg', 
            category: 'camisas', 
            name: 'Camisa Estados Unidos 2025' 
        },
        { 
            id: 1, 
            imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/15/76/157602_chuteira-campo-diavolo-astro-masculina-preto-vermelho142236_z3_638175803914156976.jpg', 
            category: 'chuteiras', 
            name: 'Chuteira Diavolo' 
        },
        { 
            id: 2, 
            imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/13/92/139294_chuteira-society-koppa-masculina-k10-azul140233_z2_638117000560032657.jpg', 
            category: 'chuteiras', 
            name: 'Chuteira Koppa Society' 
        },
        { 
            id: 1, 
            imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/jaqueta_real_madrid_2025_agasalho_de_treino_13345_5_6bcc081be5073eef44df354854f8c755.jpg', 
            category: 'agasalhos', 
            name: 'Jaqueta Real Madrid 2025' 
        },
        
        { 
            id: 1, 
            imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/camisa_brasil_2025_camisa_de_treino_12903_3_3ab2e50945eadc9096a0a60dfa153fdd.jpg', 
            category: 'camisas', 
            name: 'Camisa Brasil 2025' 
        },
    ];

    return (
        <div style={{ padding: '20px 0', textAlign: 'center', height: '100%', width: '100%' }}>
            <h2>Lançamentos</h2>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', gap: '1em', width: '90%' }}>
                    {launches.slice(0, 5).map(product => (
                        <div key={product.id} style={{ display: 'flex', flexDirection: "row", width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Link to={`/category/${product.category}/${product.id}`}>
                                <LaunchImage
                                    style={{ width: '100%', objectFit: 'cover', borderRadius: "50%" }}
                                    src={product.imageUrl}
                                    alt={product.name}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display:"flex", gap:"2em", margin:"1em 0", flexDirection:"row", width:"80%", justifyContent:"center", alignItems:"center"}}>
                        <div style={{ display: 'flex', gap: "2em", margin: "1em 0", flexDirection: "row", width: '60%', justifyContent: 'center', alignItems: 'center' }}>
                            <Link to={`/category/${launches[5].category}/${launches[5].id}`}>
                                <LaunchImage
                                    src={launches[5].imageUrl}
                                    alt={launches[5].name}
                                />
                            </Link>
                        </div>
                        <div style={{ display: 'flex', gap: "2em", margin: "1em 0", flexDirection: "row", width: '60%', justifyContent: 'center', alignItems: 'center' }}>
                            <Link to={`/category/${launches[6].category}/${launches[6].id}`}>
                                <LaunchImage
                                    src={launches[6].imageUrl}
                                    alt={launches[6].name}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaunchesSection;