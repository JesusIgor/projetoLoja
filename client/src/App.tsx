import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { ProductsProvider } from './Context/ProductsContext';
import ProductDetail from '../src/pages/ProductDetail/productDetail';
import { CartProvider } from './Context/CartContext';
import Cart from './pages/Cart'; 
import ProductMenu  from './Components/ProductMenu';
import OrderCompleted from './pages/OrdeCompleted';

import CategoryPage from './pages/CategoryPage';

import Header from './Components/Header/Header';



const App: React.FC = () => {
    return (
        <ProductsProvider>
        <CartProvider>

        <Router>
        <div style={{height:"100%", maxHeight: "400vh", width:"100%", maxWidth: "100vw"}}>
            <Header />
            <ProductMenu/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/category/:category/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} /> 
                <Route path="/order-completed" element={<OrderCompleted />} />



            </Routes>
        </div>
        </Router>
        </CartProvider>

        </ProductsProvider>

    );
};

export default App;