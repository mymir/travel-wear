'use client'

import { useState, useEffect, useRef } from 'react';

import Grid from '@mui/material/Grid';

import { Product } from '../productInterface';
import { useAuthContext } from '../../context/store';
import Cart from './Cart';
import { Divider, Typography } from '@mui/material';
import Summary from './Summary';

export default function Checkout() {
  const {uid, username, loggedIn} = useAuthContext();
  const [cart, setCart] = useState<Product[]>([]);  
  const didFetchRef = useRef(false);
  
  const [total, setTotal] = useState(0);

  function mapArray(json: Product, tempArr: Product[])  {
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
    tempArr.push(currProduct);
  }

  async function fetchData() {
    const res = await fetch(`http://localhost:8080/travelwear/shoppers/${uid}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    
    const json = await res.json();
    const tempArr: Product[] = [];
    for(var item of json.cart) {
      mapArray(item, tempArr);
    }

    setCart(tempArr);
  }

  async function removeFromCart(id: string) {
    const res = await fetch(`http://localhost:8080/travelwear/shoppers/${uid}/cart/${id}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json",
      }
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    
    fetchData();
  }

  useEffect(() => {
    let total = 0;
    cart.forEach(function (item) {
        if(item.onSale) {
            total = total + item.price/item.discount;
        } else {
            total = total + item.price;
        }
    });
    setTotal(total);
  },[cart])

  useEffect(() => {
    if(!didFetchRef.current){
      didFetchRef.current = true;
      fetchData();
    }
  }, []);

  return (
    <Grid container spacing={8} sx={{ p: 4 }}>   
        <Grid item xs={8}>
          <Grid item xs={12}>
            <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 2, p:0 }}>
              Checkout
            </Typography>
            <Divider sx={{ mb: 2 }}/>
          </Grid>   
          <Cart cart={cart} removeFromCart={removeFromCart}/>
        </Grid>
        <Summary total={total}/>
    </Grid>
  )
}
