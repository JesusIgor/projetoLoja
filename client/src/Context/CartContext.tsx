import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definição do tipo de produto
interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    category: string; // Adicione a categoria aqui
}

// Contexto para o carrinho
const CartContext = createContext<any>(null);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCartItems(prevItems => [...prevItems, product]);
    };

    const removeFromCart = (productId: number, category: string) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== productId || item.category !== category)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);