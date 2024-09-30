import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';

interface ProductsContextType {
    shirts: Product[];
    shoes: Product[];
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [shirts] = useState<Product[]>([
        { id: 1, name: 'Camisa Brasil', description: 'Camisa oficial do Brasil 2023', price: 299.99, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/4/43/Camisa_Brasil_2023.png' },
        { id: 2, name: 'Camisa Argentina', description: 'Camisa oficial da Argentina 2023', price: 299.99, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/5/55/Camisa_Argentina_2023.png' },
        { id: 3, name: 'Camisa França', description: 'Camisa oficial da França 2023', price: 319.99, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/4/43/Camisa_França_2023.png' },
        { id: 3, name: 'Camisa França', description: 'Camisa oficial da França 2023', price: 319.99, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/4/43/Camisa_França_2023.png' },
        { id: 3, name: 'Camisa França', description: 'Camisa oficial da França 2023', price: 319.99, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/4/43/Camisa_França_2023.png' },
        { id: 3, name: 'Camisa França', description: 'Camisa oficial da França 2023', price: 319.99, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/4/43/Camisa_França_2023.png' },
        { id: 3, name: 'Camisa França', description: 'Camisa oficial da França 2023', price: 319.99, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/4/43/Camisa_França_2023.png' },
        { id: 3, name: 'Camisa França', description: 'Camisa oficial da França 2023', price: 319.99, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/4/43/Camisa_França_2023.png' },
        { id: 3, name: 'Camisa França', description: 'Camisa oficial da França 2023', price: 319.99, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/4/43/Camisa_França_2023.png' },

    ]);

    const [shoes] = useState<Product[]>([
        { id: 4, name: 'Chuteira Nike Mercurial', description: 'Chuteira Nike Mercurial', price: 499.99, imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8f785f7a-1542-47db-b134-00d1e3c3bc84/mercurial-vapor-14-elite-fg-chuteira-de-futebol-x2TT6R.png' },
        { id: 5, name: 'Chuteira Adidas Predator', description: 'Chuteira Adidas Predator', price: 459.99, imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e322b6e4-61b1-45e5-8b03-2eb5d5721008/chuteira-adidas-predator-20-3-fg.png' },
        { id: 5, name: 'Chuteira Adidas Predator', description: 'Chuteira Adidas Predator', price: 459.99, imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e322b6e4-61b1-45e5-8b03-2eb5d5721008/chuteira-adidas-predator-20-3-fg.png' },
        { id: 5, name: 'Chuteira Adidas Predator', description: 'Chuteira Adidas Predator', price: 459.99, imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e322b6e4-61b1-45e5-8b03-2eb5d5721008/chuteira-adidas-predator-20-3-fg.png' },
        { id: 5, name: 'Chuteira Adidas Predator', description: 'Chuteira Adidas Predator', price: 459.99, imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e322b6e4-61b1-45e5-8b03-2eb5d5721008/chuteira-adidas-predator-20-3-fg.png' },
        { id: 5, name: 'Chuteira Adidas Predator', description: 'Chuteira Adidas Predator', price: 459.99, imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e322b6e4-61b1-45e5-8b03-2eb5d5721008/chuteira-adidas-predator-20-3-fg.png' },
        { id: 5, name: 'Chuteira Adidas Predator', description: 'Chuteira Adidas Predator', price: 459.99, imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e322b6e4-61b1-45e5-8b03-2eb5d5721008/chuteira-adidas-predator-20-3-fg.png' },
        { id: 5, name: 'Chuteira Adidas Predator', description: 'Chuteira Adidas Predator', price: 459.99, imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e322b6e4-61b1-45e5-8b03-2eb5d5721008/chuteira-adidas-predator-20-3-fg.png' },
        { id: 5, name: 'Chuteira Adidas Predator', description: 'Chuteira Adidas Predator', price: 459.99, imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e322b6e4-61b1-45e5-8b03-2eb5d5721008/chuteira-adidas-predator-20-3-fg.png' },

    ]);
    return (
        <ProductsContext.Provider value={{ shirts, shoes }}>
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