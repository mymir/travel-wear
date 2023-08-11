interface LinkItem {
    id: number;
    label: string;
    route: string;
    links: LinkItem[];
}

export const categories: LinkItem[] = [
    {
        id: 0,
        label: 'Shop All', 
        route: '',
        links: []
    },
    {
        id: 1,
        label: 'Coats', 
        route: '/coats',
        links: []
    }, 
    {
        id: 2,
        label: 'Hoodies', 
        route: '/hoodies',
        links: []
    }, 
    {
        id: 3,
        label: 'Graphic Tees', 
        route: '/graphic-tees',
        links: []
    }, 
    {
        id: 4,
        label: 'Jeans', 
        route: '/jeans',
        links: []
    }, 
    {
        id: 5,
        label: 'Pants', 
        route: '/pants',
        links: []
    }
]

export const brands: LinkItem[] = [ 
    {
        id: 0,
        label: "Shop All",
        route: '',
        links: categories
    },
    {
        id: 1,
        label: "Brand One",
        route: '/brand1',
        links: categories
    },
    {
        id: 2,
        label: "Brand Two",
        route: '/brand2',
        links: categories
    },
    {
        id: 3,
        label: "Brand Three",
        route: '/brand3',
        links: categories
    },
]

export const navLinks: LinkItem[] = [
    {
        id: 0,
        label: "Woman's",
        route: '/women',
        links: categories
    },
    {
        id: 1,
        label: "Men's",
        route: '/men',
        links: categories
    },
    {
        id: 2,
        label: 'Brands',
        route: '/brands',
        links: brands
    },
    {
        id: 3,
        label: 'Sale',
        route: '/sale',
        links: categories
    }
]