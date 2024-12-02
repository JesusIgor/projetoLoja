import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { Product } from '../types';

interface ProductsContextProps {
    categories: { [key: string]: Product[] };
    loading: boolean;
    error: string | null;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [categories, setCategories] = useState<{ [key: string]: Product[] }>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Função para buscar os produtos da API
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/produtos');  
            const products = response.data;  
            setCategories(products); 
            setLoading(false);
        } catch (err) {
            setError('Erro ao carregar os produtos');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ categories, loading, error }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('Erro no contexto de produtos');
    }
    return context;
};