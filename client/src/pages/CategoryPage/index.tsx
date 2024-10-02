import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../Context/ProductsContext';
import ProductsGrid from '../../Components/productGrid';

const CategoryPage: React.FC = () => {
    const { category = "" } = useParams<{ category: string | undefined }>(); // Extrai o parâmetro da rota
    const { categories } = useProducts(); 

    const products = category && category in categories ? categories[category as keyof typeof categories] : [];

    return (
        <div style={{ padding: '30px 20px', backgroundColor: '#f5f5f5', height:"100%" }}>
            <h2>{category.charAt(0)?.toUpperCase() + category?.slice(1)}</h2>
            <ProductsGrid data={products} category={category} />
        </div>
    );
};

export default CategoryPage;