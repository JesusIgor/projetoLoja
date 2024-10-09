import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';

interface ProductsContextProps {
    categories: { [key: string]: Product[] };
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [categories] = useState({
        camisas: [
            { 
                id: 1, 
                name: 'Camisa Brasil 2025', 
                description: 'Camisa oficial da Seleção Brasileira 2025.', 
                price: 349.99, 
                marca: 'Nike', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/camisa_brasil_2025_camisa_de_treino_12903_1_8dd970ea344c7fd6036c3f8a749d1908.jpg',
                category: 'camisas'
            },
            { 
                id: 2, 
                name: 'Camisa Itália 2025', 
                description: 'Camisa II da Seleção Italiana 2025, modelo jogador.', 
                price: 379.99, 
                marca: 'Puma', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/camisa_italia_2025_camisa_ii_jogador_selecao_da_italia_13233_1_0d7cbad51dc86093141d169511873eae.jpg',
                category: 'camisas'
            },
            { 
                id: 3, 
                name: 'Camisa Estados Unidos 2025', 
                description: 'Camisa I da Seleção dos Estados Unidos 2025.', 
                price: 329.99, 
                marca: 'Nike', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/camisa_estados_unidos_2025_camisa_i_13203_1_6f1f313c8b45e2484c967cb896b0c5e6.jpg',
                category: 'camisas'
            },
            { 
                id: 4, 
                name: 'Camisa Holanda 2025', 
                description: 'Camisa II da Seleção Holandesa 2025, modelo jogador.', 
                price: 389.99, 
                marca: 'Nike', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/camisa_holanda_2025_camisa_ii_jogador_13217_1_b7e66f6c3228817278de7b7e4665c8cd.jpg',
                category: 'camisas'
            },
            { 
                id: 5, 
                name: 'Camisa Argentina 2025', 
                description: 'Camisa de manga longa da Seleção Argentina 2025.', 
                price: 409.99, 
                marca: 'Adidas', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/camisa_manga_longa_argentina_2025_camisa_i_13165_1_eb7586ddd87359e8ac2caf1bcb3af586.jpg',
                category: 'camisas'
            },
            { 
                id: 6, 
                name: 'Camisa Suíça 2025', 
                description: 'Camisa I da Seleção Suíça 2025.', 
                price: 359.99, 
                marca: 'Puma', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/camisa_suica_2025_camisa_i_13149_1_ef64dcecf7bb0fbcafdd3ec0e8fa4a54.png',
                category: 'camisas'
            },
            { 
                id: 7, 
                name: 'Camisa Inglaterra 2025', 
                description: 'Uniforme de treino da Seleção Inglesa 2025.', 
                price: 299.99, 
                marca: 'Nike', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/camisa_inglaterra_2025_uniforme_treino_12911_1_e5485e286667f1e411f8d0f82254a67e.jpg',
                category: 'camisas'
            }
        ],
        chuteiras: [
            { 
                id: 1, 
                name: 'Chuteira Esportiva', 
                description: 'Chuteira leve para jogadores velozes.', 
                price: 499.99, 
                marca: 'Genérica', 
                imageUrl: 'https://media.istockphoto.com/id/682665468/pt/foto/sport-sneakers.jpg?s=612x612&w=0&k=20&c=muUVBhlnpyn7lgbX9wkhXHvJ49S4JcN4Q3lvcBKLvl0=',
                category: 'chuteiras'
            },
            { 
                id: 2, 
                name: 'Chuteira de Couro', 
                description: 'Chuteira clássica de couro para melhor controle.', 
                price: 459.99, 
                marca: 'Genérica', 
                imageUrl: 'https://media.istockphoto.com/id/671028562/pt/foto/black-leather-football-shoes-or-soccer-boots-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=AM4XsGsZ7bUhLuTM-kLTQt9Fa08TzAfKF4hPHaINe0E=',
                category: 'chuteiras'
            },
            { 
                id: 3, 
                name: 'Chuteira de Couro com Spikes', 
                description: 'Design robusto com spikes para maior tração.', 
                price: 420.00, 
                marca: 'Genérica', 
                imageUrl: 'https://media.istockphoto.com/id/1490317533/pt/foto/leather-football-boots-with-spikes.jpg?s=612x612&w=0&k=20&c=2FjQ6Gej8cL5N2IPAE2Xx-pfLNNbohL97ee1Vqg98lg=',
                category: 'chuteiras'
            },
            { 
                id: 4, 
                name: 'Chuteira Preta com Detalhes Laranja', 
                description: 'Chuteira com listras e cadarços laranja para um visual moderno.', 
                price: 310.00, 
                marca: 'Genérica', 
                imageUrl: 'https://media.istockphoto.com/id/1287425629/pt/foto/black-sneaker-with-orange-laces-and-stripes.jpg?s=612x612&w=0&k=20&c=-du8sqe4zpyE3OylBBzmyQgqtPmw7wJ_JXF6IOIFt0M=',
                category: 'chuteiras'
            },
            { 
                id: 5, 
                name: 'Chuteira de Couro Preta', 
                description: 'Modelo clássico em couro preto, ideal para qualquer terreno.', 
                price: 399.99, 
                marca: 'Genérica', 
                imageUrl: 'https://media.istockphoto.com/id/134340580/pt/foto/par-de-botas-de-couro-preto.jpg?s=612x612&w=0&k=20&c=UNaiVAIJ0tEISLX9pHGghUlZhsfe2oBSNhyoaRbiU2U=',
                category: 'chuteiras'
            },
            { 
                id: 6, 
                name: 'Chuteira Casual', 
                description: 'Chuteira versátil para treinos e uso casual.', 
                price: 329.99, 
                marca: 'Genérica', 
                imageUrl: 'https://media.istockphoto.com/id/512200454/pt/foto/sapatos-desportivos-isolado-em-fundo-branco.jpg?s=612x612&w=0&k=20&c=Y_yPUJZlBuGx53UzoK1E57hJEDQSwgYXVqIRwsfj334=',
                category: 'chuteiras'
            },
            { 
                id: 7, 
                name: 'Chuteira de Alta Performance', 
                description: 'Desenvolvida para o máximo de performance em campo.', 
                price: 490.00, 
                marca: 'Genérica', 
                imageUrl: 'https://media.istockphoto.com/id/1028815950/pt/foto/shoe.jpg?s=612x612&w=0&k=20&c=NSkKgnMcNP-A7vZWmzlOD0NPAHuraR62eeqN2HRZ9UU=',
                category: 'chuteiras'
            },
            { 
                id: 8, 
                name: 'Chuteira com Travas Ajustáveis', 
                description: 'Chuteira com sistema de travas ajustáveis para maior flexibilidade.', 
                price: 310.00, 
                marca: 'Genérica', 
                imageUrl: 'https://media.istockphoto.com/id/1407740180/pt/foto/water-shoes-with-elastic-shoelace-locking-mechanisms-to-quickly-adjust-the-loose-easily-to-put.jpg?s=612x612&w=0&k=20&c=1Ai0btplxDw_5hrhkyGkyZiaqjG35pQh4qs_NfgcdqQ=',
                category: 'chuteiras'
            }
        ],
        calças: [
            { 
                id: 1, 
                name: 'Calça Esportiva Genérica', 
                description: 'Calça ideal para treinos e atividades físicas.', 
                price: 249.99, 
                marca: 'Genérica', 
                imageUrl: 'https://images.unsplash.com/photo-1616612016441-1a679589dbe5',
                category: 'calças'
            },
            { 
                id: 2, 
                name: 'Calça Térmica', 
                description: 'Calça com tecnologia de aquecimento para dias frios.', 
                price: 199.99, 
                marca: 'Genérica', 
                imageUrl: 'https://images.unsplash.com/photo-1596031779045-27963d11e1d1',
                category: 'calças'
            }
        ],
        acessorios: [
            { 
                id: 1, 
                name: 'Bola de Futebol Genérica', 
                description: 'Bola de futebol com alta durabilidade e resistência.', 
                price: 599.99, 
                marca: 'Genérica', 
                imageUrl: 'https://images.unsplash.com/photo-1511507001582-48c7c965ffbb',
                category: 'acessorios'
            },
            { 
                id: 2, 
                name: 'Bola de Futebol Sala', 
                description: 'Ideal para jogos de salão, com ótimo controle e precisão.', 
                price: 549.99, 
                marca: 'Genérica', 
                imageUrl: 'https://images.unsplash.com/photo-1505721251970-3f7b67fcd58c',
                category: 'acessorios'
            }
        ]
    });
    return (
        <ProductsContext.Provider value={{ categories }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('erro no contexto de produtos');
    }
    return context;
};