export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    onSale: boolean;
    discount: number;
    isNew: boolean;
    isFeatured: boolean;
    gender: string;
    rating: number;
    // colors: string[];
    sizes: {
        tag: string;
        quantity: number;
    };
    photos: String[];
}

export interface Color {
    tag: string;
    code: string;
}