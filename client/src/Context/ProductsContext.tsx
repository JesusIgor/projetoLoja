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
                name: 'Camisa Brasil', 
                description: 'Camisa oficial do Brasil 2023', 
                price: 299.99, 
                marca: 'Genérica', 
                imageUrl: 'https://images.unsplash.com/photo-1580467048763-1d51a807f3b8', 
                category: 'camisas'
            },
            { 
                id: 2, 
                name: 'Camisa Argentina', 
                description: 'Camisa oficial da Argentina 2023', 
                price: 299.99, 
                marca: 'Genérica', 
                imageUrl: 'https://images.unsplash.com/photo-1592236011626-e35b50204b9e',
                category: 'camisas'
            },
            { 
                id: 3, 
                name: 'Camisa França', 
                description: 'Camisa oficial da França 2023', 
                price: 319.99, 
                marca: 'Genérica', 
                imageUrl: 'https://images.unsplash.com/photo-1587074188851-c4e66a9f2d34',
                category: 'camisas'
            },
            { 
                id: 4, 
                name: 'Camisa Alemanha', 
                description: 'Camisa oficial da Alemanha 2023', 
                price: 310.00, 
                marca: 'Genérica', 
                imageUrl: 'https://images.unsplash.com/photo-1612002240195-587d2abf5c3a',
                category: 'camisas'
            }
        ],
        chuteiras: [
            { 
                id: 1, 
                name: 'Chuteira de Futebol Genérica', 
                description: 'Chuteira leve e resistente para jogos em gramados naturais.', 
                price: 499.99, 
                marca: 'Genérica', 
                imageUrl: 'https://images.unsplash.com/photo-1587033918324-08b6e15f3f2e',
                category: 'chuteiras'
            },
            { 
                id: 2, 
                name: 'Chuteira Esportiva', 
                description: 'Design anatômico para maior conforto e performance.', 
                price: 459.99, 
                marca: 'Genérica', 
                imageUrl: 'https://images.unsplash.com/photo-1596238164405-8db3d52c17e6',
                category: 'chuteiras'
            },
            { 
                id: 3, 
                name: 'Chuteira Pro Model', 
                description: 'Alta performance para competições de futebol.', 
                price: 420.00, 
                marca: 'Genérica', 
                imageUrl: 'https://images.unsplash.com/photo-1598743222248-36dbec54b2ea',
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
        throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
};