import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login';
import Home from '../src/pages/Home';
import { ProductsProvider } from './Context/ProductsContext';
import ProductDetail from '../src/pages/ProductDetail/productDetail';


const App: React.FC = () => {
    return (
        <ProductsProvider>

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product/:id" element={<ProductDetail />} />

            </Routes>
        </Router>
        </ProductsProvider>

    );
};

export default App;