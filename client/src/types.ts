export interface Product {
    id: number;
    name: string;
    description: string;
    marca: string;
    price: number;
    imageUrl: string;
    category?: string; 
}

export interface CartItem {
    product: Product;
    quantity: number;
}
