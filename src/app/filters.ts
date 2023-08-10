interface FilterItem {
    id: number;
    label: string;
    items: string[];
}

export const filters: FilterItem[] = [
    {
        id: 0,
        label: 'Size',
        items: ['xs','sm','md','lg','xl','xxl']
    }, 
    {
        id: 1,
        label: 'Color', 
        items: ['grey','black','blue','brown','green','neutral','orange','pink','purple','red','white','yellow','multi colored']
    }, 
    {
        id: 2,
        label: 'Price', 
        items: ['5','150']
    }, 
    {
        id: 3,
        label: 'Sort By', 
        items: ['featured','lowest price','highest price','sale','newest']
    }
]
