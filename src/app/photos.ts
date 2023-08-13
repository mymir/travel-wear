// interface PhotoItem {
//     id: number;
//     url: string;
// }

// export const displayItems: PhotoItem[] = [
//     {
//         id: 0,
//         url: 'https://images.unsplash.com/photo-1584720223124-466ff369e7c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
//     },
//     {
//         id: 1,
//         url: 'https://images.unsplash.com/photo-1586102901518-ca0f178acb5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
//     },
//     {
//         id: 2,
//         url: 'https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80'
//     },
//     {
//         id: 3,
//         url: 'https://images.unsplash.com/photo-1631902112544-2271267abb73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
//     },
// ]
interface PhotoItem {
    id: number;
    name: string;
    price: number;
    onSale: boolean;
    markdown: number;
    featured: boolean;
    colors: string[];
    primaryUrl: string;    
    secondaryUrl: string;
}

export const womenTops: PhotoItem[] = [
    {
        id: 0,
        name: 'Pink Tied Crop Top',
        price: 15,
        onSale: false,
        markdown: 0,
        featured: true,
        colors: ['#ff4f98'],
        primaryUrl: 'https://images.unsplash.com/photo-1585497115342-e129d5e533ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        secondaryUrl: 'https://images.unsplash.com/photo-1584720223124-466ff369e7c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
        id: 1,
        name: 'Grey Graphic T-Shirt',
        price: 25,
        onSale: true,
        markdown: 10,
        featured: false,
        colors: ['#575c69', '#edf3ff'],
        primaryUrl: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
        secondaryUrl: 'https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 2,
        name: 'Tan Graphic T-Shirt',
        price: 30,
        onSale: false,
        markdown: 0,
        featured: false,
        colors: ['#f2d5d5'],
        primaryUrl: 'https://images.unsplash.com/photo-1598211686290-a8ef209d87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        secondaryUrl: 'https://images.unsplash.com/photo-1598211664451-1458e4a3e279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
        id: 3,
        name: 'Yellow Heavy Puffer Jacket',
        price: 60,
        onSale: false,
        markdown: 0,
        featured: false,
        colors: ['#fcba03'],
        primaryUrl: 'https://images.unsplash.com/photo-1631902112544-2271267abb73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        secondaryUrl: 'https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
        id: 4,
        name: 'Classic Blue Denim Jacket',
        price: 53,
        onSale: false,
        markdown: 0,
        featured: false,
        colors: ['#6f9cbf'],
        primaryUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        secondaryUrl: 'https://images.unsplash.com/photo-1520423465871-0866049020b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
        id: 5,
        name: 'Sherpa Multi-Colored Flower Jacket',
        price: 25,
        onSale: false,
        markdown: 0,
        featured: false,
        colors: ['#fa2216'],
        primaryUrl: 'https://images.unsplash.com/photo-1582657243548-514667f1e1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        secondaryUrl: 'https://images.unsplash.com/photo-1582657233895-0f37a3f150c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 6,
        name: 'Classic Solid Colored Hoodie',
        price: 36,
        onSale: true,
        markdown: 5,
        featured: false,
        colors: ['#fac1be', '#f2f2f2'],
        primaryUrl: 'https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=810&q=80',
        secondaryUrl: 'https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80'
    },
    {
        id: 7,
        name: 'Skeletal Hand Graphic T-Shirt',
        price: 15,
        onSale: false,
        markdown: 0,
        featured: true,
        colors: ['#262626'],
        primaryUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        secondaryUrl: 'https://images.unsplash.com/photo-1503342250614-ca440786f637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
    },
]

export const menBottoms: PhotoItem[] = [
    {
        id: 0,
        name: 'Yellow Egg Graphic Pants',
        price: 27,
        onSale: false,
        markdown: 0,
        featured: true,
        colors: ['#ff4f98'],
        primaryUrl: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
        secondaryUrl: 'https://images.unsplash.com/photo-1517438587856-01447fbf58a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 1,
        name: 'Grid Pattern Dress Pants',
        price: 20,
        onSale: false,
        markdown: 0,
        featured: false,
        colors: ['#f2d5d5'],
        primaryUrl: 'https://images.unsplash.com/photo-1596389662344-80f794f1ca99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        secondaryUrl: 'https://images.unsplash.com/photo-1596389607920-aa20720939c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
        id: 2,
        name: 'Classic Grey Dress Pants',
        price: 27,
        onSale: false,
        markdown: 0,
        featured: true,
        colors: ['#ff4f98'],
        primaryUrl: 'https://images.unsplash.com/photo-1520367745676-56196632073f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        secondaryUrl: 'https://images.unsplash.com/photo-1490551632573-78c6c247f5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
        id: 3,
        name: 'Red Stripe Sports Pants',
        price: 30,
        onSale: false,
        markdown: 0,
        featured: false,
        colors: ['#f2d5d5'],
        primaryUrl: 'https://images.unsplash.com/photo-1503341910231-c3d098fafba1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        secondaryUrl: 'https://images.unsplash.com/photo-1503341543961-ce80b820edce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 4,
        name: 'Black Slim Fit Jeans',
        price: 25,
        onSale: true,
        markdown: 10,
        featured: false,
        colors: ['#575c69', '#edf3ff'],
        primaryUrl: 'https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        secondaryUrl: 'https://images.unsplash.com/photo-1503342083860-88762657bae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 5,
        name: 'Tan Slim Fit Jeans',
        price: 25,
        onSale: true,
        markdown: 10,
        featured: false,
        colors: ['#575c69', '#edf3ff'],
        primaryUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        secondaryUrl: 'https://images.unsplash.com/photo-1552783858-1e47edf7898b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 6,
        name: 'Green Slim Fit Sports Sweats',
        price: 20,
        onSale: false,
        markdown: 0,
        featured: false,
        colors: ['#f2d5d5'],
        primaryUrl: 'https://images.unsplash.com/photo-1518417823698-91652324a3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        secondaryUrl: 'https://images.unsplash.com/photo-1516138889897-da554d2501f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 7,
        name: 'Ripped Straight Fit Jeans',
        price: 30,
        onSale: false,
        markdown: 0,
        featured: false,
        colors: ['#f2d5d5'],
        primaryUrl: 'https://images.unsplash.com/photo-1520640113944-7ddf59240b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        secondaryUrl: 'https://images.unsplash.com/photo-1520517238863-2a437c6b1b08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    }
]