'use client'

import { useState, useEffect, useRef } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SaleBanner from '../components/SaleBanner';
import ProductList from '../components/ProductList';

import { Product, Color } from '../productInterface';

export default function Women() {
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
    const res = await fetch('http://localhost:8080/travelwear/products/women');

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
      <SaleBanner text="SUMMER SALE" image="https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
      <ProductList apparel={apparel}/>
    </Container>
  )
}