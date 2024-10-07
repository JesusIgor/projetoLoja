export interface Product {
    id: number;
    name: string;
    description: string;
    marca: string;
    price: number;
    imageUrl: string;
    category?: string; 
}

// Defina o tipo do item do carrinho
export interface CartItem {
    product: Product;
    quantity: number;
}
