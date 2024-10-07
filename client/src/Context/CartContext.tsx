import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definição do tipo de produto
interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    category: string; // Adicione a categoria aqui
}

// Defina o tipo do item do carrinho
interface CartItem {
    product: Product;
    quantity: number;
}

// Contexto para o carrinho
const CartContext = createContext<any>(null);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.product.id === product.id);
            if (existingItem) {
                // Se o item já existe, apenas aumente a quantidade
                return prevItems.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // Se o item não existe, adicione-o ao carrinho com quantidade 1
            return [...prevItems, { product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setCartItems(prevItems => {
            return prevItems.reduce<CartItem[]>((acc, item) => {
                if (item.product.id === productId) {
                    if (item.quantity > 1) {
                        // Reduzir a quantidade se ainda houver mais de 1
                        acc.push({ ...item, quantity: item.quantity - 1 });
                    }
                    // Se a quantidade chegar a 1, não o adiciona
                    return acc; 
                }
                acc.push(item);
                return acc;
            }, []);
        });
    };

    const clearCart = () => {
        setCartItems([]); // Limpa o carrinho
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);