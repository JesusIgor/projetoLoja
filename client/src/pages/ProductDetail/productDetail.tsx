import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../Context/ProductsContext';
import { Card } from 'antd';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { shirts, shoes } = useProducts();
    
    // Juntando os arrays de produtos para facilitar a busca
    const products = [...shirts, ...shoes];
    const product = products.find(p => p.id.toString() === id);
    console.log(product)
    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    return (
        <div style={{display: "flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <Card
            title={product.name}
            style={{ width: '50%', margin: '20px auto' }}
            cover={<img alt={product.name} src={product.imageUrl} style={{ height: '300px', objectFit: 'none' }} />}
        >
            <p>{product.description}</p>
            <p>Preço: R$ {product.price.toFixed(2)}</p>
        </Card>
        </div>
    );
};

export default ProductDetail;