'use client'

import { useState, useEffect, useRef } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ProductList from '../components/ProductList';

import { Product, Color } from '../productInterface';

export default function Sale() {
  const [apparel, setApparel] = useState<Product[]>([]);  
  const didFetchRef = useRef(false);

  const tempArray: Product[] = [];

  function mapArray(json: Product)  {
    const currProduct = {
        id: json.id, 
        name: json.name,
        price: json.price,
        category: json.category,
        onSale: json.onSale,
        discount: json.discount,
        isNew: json.isNew,
        isFeatured: json.isFeatured,
        gender: json.gender,
        rating: json.rating,
        sizes: json.sizes,
        photos: json.photos,
    }
    tempArray.push(currProduct);
  }
    
  async function fetchData() {
    const res = await fetch('http://localhost:8080/travelwear/products/sale');

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const json = await res.json();
    for(var item of json) {
      console.log(item);
      mapArray(item);
    }
    setApparel(tempArray);
  }

  useEffect(() => {
    if(!didFetchRef.current){
      didFetchRef.current = true;
      fetchData();
    }
  }, []);
  return (
    <Container maxWidth={false} sx={{ pt: 2 }} >
      <Typography variant='h4' sx={{wdith: '100vw', textAlign: 'center', fontWeight: 'bold', pb: 2}}>
        Sale
      </Typography>
      <ProductList apparel={apparel}/>
    </Container>
  )
}
