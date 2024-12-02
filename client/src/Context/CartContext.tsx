import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';
import { message } from 'antd';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const API_URL = 'http://localhost:3000';

const CartContext = createContext<any>(null);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = async (product: Product) => {
    try {
      const existingItem = cartItems.find((item) => item.product.id === product.id);

      if (existingItem) {
        const updatedItem = await axios.put(`${API_URL}/carrinho/${product.id}`, {
          quantity: existingItem.quantity + 1,
        });

        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.product.id === product.id ? { ...item, quantity: updatedItem.data.quantity } : item
          )
        );
      } else {
        const newItem = await axios.post(`${API_URL}/carrinho`, { product, quantity: 1 });

        setCartItems((prevItems) => [...prevItems, newItem.data]);
      }
    } catch (error) {
      message.error('Erro ao adicionar produto ao carrinho');
    }
  };

  const removeFromCart = async (productId: number) => {
    try {
      const itemToRemove = cartItems.find((item) => item.product.id === productId);
      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          const updatedItem = await axios.put(`${API_URL}/carrinho/${productId}`, {
            quantity: itemToRemove.quantity - 1,
          });

          setCartItems((prevItems) =>
            prevItems.map((item) =>
              item.product.id === productId ? { ...item, quantity: updatedItem.data.quantity } : item
            )
          );
        } else {
          await axios.delete(`${API_URL}/carrinho/${productId}`);

          setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
        }
      }
    } catch (error) {
      message.error('Erro ao remover produto do carrinho');
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete(`${API_URL}/carrinho`);
      setCartItems([]);
    } catch (error) {
      message.error('Erro ao limpar o carrinho');
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);