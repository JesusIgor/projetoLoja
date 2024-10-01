import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../../Context/ProductsContext';
import { notification } from 'antd';
import { useCart } from '../../Context/CartContext';
import {
    ProductDetailContainer,
    StyledCard,
    ProductImage,
    BuyButton,
} from './style';

const ProductDetail: React.FC = () => {
    const { id, category = "" } = useParams<{ id: string; category: string }>();
    const { categories } = useProducts();
    const { addToCart } = useCart();

    // Obtendo produtos da categoria específica
    const products = categories[category] || []; // Verifica se a categoria existe
    const product = products.find(p => p.id.toString() === id); // Procura o produto na categoria

    // Função para mostrar a notificação
    const openNotification = (productName: string) => {
        notification.success({
            message: 'Produto adicionado',
            description: `${productName} foi adicionado ao carrinho.`,
            placement: 'topRight',
            duration: 3,
        });
    };

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    const handleAddToCart = () => {
        addToCart(product); // Adiciona o produto ao carrinho
        openNotification(product.name); // Mostra a notificação
    };

    return (
        <ProductDetailContainer>
            <StyledCard
                title={product.name}
                cover={<ProductImage alt={product.name} src={product.imageUrl} />}
            >
                <p>{product.description}</p>
                <p style={{ fontWeight: 'bold', color: '#003366' }}>
                    Preço: R$ {product.price.toFixed(2)}
                </p>
                <BuyButton onClick={handleAddToCart}>Comprar</BuyButton>
                <Link to="/cart">
                    <BuyButton style={{ backgroundColor: '#f97132', marginTop: 10 }}>
                        Finalizar Compra
                    </BuyButton>
                </Link>
            </StyledCard>
        </ProductDetailContainer>
    );
};

export default ProductDetail;