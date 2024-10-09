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
                name: 'Chuteira Diavolo', 
                description: 'Chuteira de campo com design moderno e alta performance.', 
                price: 499.99, 
                marca: 'Nike', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/15/76/157602_chuteira-campo-diavolo-astro-masculina-preto-vermelho142236_z3_638175803914156976.jpg',
                category: 'chuteiras'
            },
            { 
                id: 2, 
                name: 'Chuteira Koppa Society', 
                description: 'Ideal para jogos em campo reduzido, com ótimo controle.', 
                price: 459.99, 
                marca: 'Adidas', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/13/92/139294_chuteira-society-koppa-masculina-k10-azul140233_z2_638117000560032657.jpg',
                category: 'chuteiras'
            },
            { 
                id: 3, 
                name: 'Chuteira Nike Beco 2', 
                description: 'Chuteira society com excelente tração e conforto.', 
                price: 420.00, 
                marca: 'Nike', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/76/29/76291_chuteira-society-nike-beco-2-masculina129927_z2_637699760282864376.jpg',
                category: 'chuteiras'
            },
            { 
                id: 4, 
                name: 'Chuteira Indoor Adidas Predator 4', 
                description: 'Chuteira indoor com excelente controle de bola e conforto.', 
                price: 310.00, 
                marca: 'Adidas', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/15/83/158331_chuteira-indoor-adidas-predator-4-masculina-preto-rosa142344_z1_638236244787468218.jpg',
                category: 'chuteiras'
            },
            { 
                id: 5, 
                name: 'Chuteira Indoor Adidas Predator 24', 
                description: 'Modelo versátil para jogos em ambientes fechados.', 
                price: 399.99, 
                marca: 'Adidas', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/20/20/202068_chuteira-indoor-adidas-predator-24-preto-branco-laranja148709_z5_638506884964654421.jpg',
                category: 'chuteiras'
            },
            { 
                id: 6, 
                name: 'Chuteira Koppa K10', 
                description: 'Chuteira de society com design leve e confortável.', 
                price: 329.99, 
                marca: 'Puma', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/13/92/139291_chuteira-society-koppa-k10140260_z2_638121412175557873.jpg',
                category: 'chuteiras'
            },
            { 
                id: 7, 
                name: 'Chuteira Campo Koppa K10', 
                description: 'Chuteira de campo com ótima aderência e suporte.', 
                price: 490.00, 
                marca: 'Puma', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/13/93/139300_chuteira-campo-koppa-k10140263_z2_638121412616789785.jpg',
                category: 'chuteiras'
            },
            { 
                id: 8, 
                name: 'Chuteira Indoor Diavolo Dominium', 
                description: 'Chuteira indoor com design ergonômico e alta performance.', 
                price: 310.00, 
                marca: 'Nike', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/15/87/158760_chuteira-indoor-diavolo-dominium-branco142234_z3_638212111531417534.jpg',
                category: 'chuteiras'
            },
            { 
                id: 9, 
                name: 'Chuteira Indoor Nike Legend 9', 
                description: 'Modelo clássico para jogos indoor com alta performance.', 
                price: 310.00, 
                marca: 'Nike', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/11/47/114769_chuteira-indoor-nike-legend-9-club-masculino-preto-branco-azul135837_z2_637934885956733975.jpg',
                category: 'chuteiras'
            }
        ],
        calças: [
            { 
                id: 1, 
                name: 'Calça Esportiva Genérica', 
                description: 'Calça ideal para treinos e atividades físicas.', 
                price: 249.99, 
                marca: 'Nike', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/calca_de_treino_mexico_2025_13329_1_08742e364460a7b4ac56e6ca1d522601.jpg',
                category: 'calças'
            },
            { 
                id: 2, 
                name: 'Calça Térmica', 
                description: 'Calça com tecnologia de aquecimento para dias frios.', 
                price: 199.99, 
                marca: 'Adidas', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/calca_de_treino_arsenal_2025_13297_1_f81aab5dc23c6531c6590c3ee94e4797.jpg',
                category: 'calças'
            },
            { 
                id: 3, 
                name: 'Calça de Treino Arsenal 2025', 
                description: 'Calça de treino oficial do Arsenal 2025.', 
                price: 299.99, 
                marca: 'Puma', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/calca_de_treino_arsenal_2025_13295_1_399fcf00b16963de8c457705d2d27ef8.jpg',
                category: 'calças'
            },
            { 
                id: 4, 
                name: 'Calça de Treino Alemanha 2025', 
                description: 'Calça de treino oficial da Seleção Alemã 2025.', 
                price: 299.99, 
                marca: 'Nike', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/calca_de_treino_alemanha_2025_13283_1_7a9df71dca247be4be2aa86bbc220220.jpg',
                category: 'calças'
            },

        ],
        agasalhos: [
            { 
                id: 1, 
                name: 'Jaqueta Real Madrid 2025', 
                description: 'Agasalho de treino oficial da Real Madrid 2025.', 
                price: 599.99, 
                marca: 'Nike', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/jaqueta_real_madrid_2025_agasalho_de_treino_13345_1_632a9db3a99ec526d5e398c889f66f52.jpg',
                category: 'agasalhos'
            },
            { 
                id: 2, 
                name: 'Jaqueta PSG 2025', 
                description: 'Agasalho de treino oficial do Paris Saint Germain 2025.', 
                price: 549.99, 
                marca: 'Adidas', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/jaqueta_paris_saint_germain_2025_agasalho_de_treino_psg_13337_1_05977b9e6df0692944682ecd67aa22ef.jpg',
                category: 'agasalhos'
            },
            { 
                id: 3, 
                name: 'Jaqueta PSG 2025', 
                description: 'Agasalho de treino oficial do Paris Saint Germain 2025.', 
                price: 549.99, 
                marca: 'Puma', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/jaqueta_paris_saint_germain_2025_agasalho_de_treino_psg_13335_1_6192c463109748f415c1012f14f23a3f.jpg',
                category: 'agasalhos'
            },
            { 
                id: 4, 
                name: 'Jaqueta México 2025', 
                description: 'Agasalho de treino oficial da Seleção Mexicana 2025.', 
                price: 599.99, 
                marca: 'Nike', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/jaqueta_mexico_2025_agasalho_de_treino_13333_1_ae05a02cfddbe2844a8053601b851a10.jpg',
                category: 'agasalhos'
            },
            { 
                id: 5, 
                name: 'Jaqueta Manchester United 2025', 
                description: 'Agasalho de treino oficial do Manchester United 2025.', 
                price: 599.99, 
                marca: 'Adidas', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/jaqueta_manchester_united_2025_agasalho_de_treino_13323_1_fedd71c16fa459a1dc0746e959396de3.jpg',
                category: 'agasalhos'
            },
            { 
                id: 6, 
                name: 'Jaqueta Manchester United 2025', 
                description: 'Agasalho de treino oficial do Manchester United 2025.', 
                price: 599.99, 
                marca: 'Puma', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/jaqueta_manchester_united_2025_agasalho_de_treino_13321_1_f15f047218c5d39935b35b31e824c05c.jpg',
                category: 'agasalhos'
            },
            { 
                id: 7, 
                name: 'Jaqueta Espanha 2025', 
                description: 'Agasalho de treino oficial da Seleção Espanhola 2025.', 
                price: 599.99, 
                marca: 'Nike', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/jaqueta_espanha_2025_agasalho_de_treino_13313_1_4c04d198e6127b3425ce2439734343df.jpg',
                category: 'agasalhos'
            },
            { 
                id: 8, 
                name: 'Jaqueta Barcelona 2025', 
                description: 'Agasalho de treino oficial do Barcelona 2025.', 
                price: 599.99, 
                marca: 'Adidas', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/jaqueta_barcelona_2025_agasalho_de_treino_13309_1_ad6708833281d5716c4b94376a53ff3c.jpg',
                category: 'agasalhos'
            },
            { 
                id: 9, 
                name: 'Jaqueta Arsenal 2025', 
                description: 'Agasalho de treino oficial do Arsenal 2025.', 
                price: 599.99, 
                marca: 'Puma', 
                imageUrl: 'https://images.tcdn.com.br/img/img_prod/694710/jaqueta_arsenal_2025_agasalho_de_treino_13301_1_91d3180ed7e2092dd06d7f3dcc1e014b.jpg',
                category: 'agasalhos'
            }
        ],
        acessorios: [
            { 
                id: 1, 
                name: 'Bola Society Penalty Storm XXI', 
                description: 'Bola de society ideal para jogos e treinos.', 
                price: 128.59, 
                marca: 'Penalty', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/68/03/68039_bola-society-penalty-storm-xxi128599_z1_637659419704082263.jpg',
                category: 'acessorios'
            },
            { 
                id: 2, 
                name: 'Bola de Vôlei Poker Training', 
                description: 'Bola de vôlei de treinamento de alta qualidade.', 
                price: 138.03, 
                marca: 'Poker', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/13/07/130792_bola-volei-poker-training138039_z1_638050489471075788.jpg',
                category: 'acessorios'
            },
            { 
                id: 3, 
                name: 'Bola de Futsal Topper Slick Colorful', 
                description: 'Bola de futsal com design colorido e alta durabilidade.', 
                price: 133.25, 
                marca: 'Topper', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/10/60/106034_bola-futsal-topper-slick-colorful133252_z1_637836442354098250.jpg',
                category: 'acessorios'
            },
            { 
                id: 4, 
                name: 'Bola de Campo Puma Icon Ball', 
                description: 'Bola de campo com design moderno e excelente desempenho.', 
                price: 142.14, 
                marca: 'Puma', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/15/96/159632_bola-campo-puma-icon-ball-amarelo-neon142141_z1_638192433629934384.jpg',
                category: 'acessorios'
            },
            { 
                id: 5, 
                name: 'Mochila Fila Vintage', 
                description: 'Mochila estilosa e prática para o dia a dia.', 
                price: 142.67, 
                marca: 'Fila', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/15/94/159427_mochila-fila-vintage142267_z2_638192367788684888.jpg',
                category: 'acessorios'
            },
            { 
                id: 6, 
                name: 'Mochila Fila Doppio Unissex Preto', 
                description: 'Mochila unissex com design moderno e funcional.', 
                price: 142.88, 
                marca: 'Fila', 
                imageUrl: 'https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/15/94/159484_mochila-fila-doppio-unissex-preto142288_z2_638191608828376283.jpg',
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