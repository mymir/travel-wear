'use client'

import { useState } from 'react';
import { useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { Product } from '../productInterface';
import { Link, Typography } from '@mui/material';

export default function Cart({cart, removeFromCart}:{cart: Product[], removeFromCart: Function}) {
    
    return (
        <TableContainer>
        <Table aria-label="simple table" sx={{position: 'static', verticalAlign: 'top'}}>
            <TableHead>
            <TableRow>
                <TableCell align="left"> </TableCell>
                <TableCell align="left"><Typography sx={{ fontWeight: 'bold' }}>Item</Typography></TableCell>
                <TableCell align="left"><Typography sx={{ fontWeight: 'bold' }}>Quantity</Typography></TableCell>
                <TableCell align="right"><Typography sx={{ fontWeight: 'bold' }}>Item price</Typography></TableCell>
                <TableCell align="right"><Typography sx={{ fontWeight: 'bold' }}>Subtotal</Typography></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {cart.map((item, index) => (
                <TableRow
                key={item.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="left">
                    <Box
                        sx={{ 
                            display: 'block',
                            height: '170px', 
                            width: '120px', 
                            backgroundPosition: "center", 
                            backgroundSize: "cover", 
                            backgroundRepeat: "no-repeat", 
                            backgroundImage: `url(${item.photos[0]})`,
                        }}
                    />
                </TableCell>
                <TableCell component="th" scope="row" sx={{ maxWidth: '10vw' }}>
                    <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                    <Typography>Color: blank</Typography>
                    <Typography>Size: S</Typography>
                </TableCell>
                <TableCell align="left"> 
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography>One</Typography>
                        <Link onClick={() => removeFromCart(item.id)}>remove</Link>
                        <Link>move to favorites</Link>
                    </Box>
                </TableCell>
                <TableCell align="right">
                    {item.onSale
                        ? 
                        <Box sx={{display: 'flex', my: 2, justifyContent: 'end', alignItems: 'baseline'}}>
                            <Typography sx={{ display: 'inline-flex', color: 'grey', textDecoration: 'line-through' }} >
                                ${item.price}
                            </Typography>
                            <Typography sx={{ ml:1, display: 'inline-flex', color: 'primary.main' }} >
                                ${item.price - (item.price/item.discount)}
                            </Typography>
                        </Box>
                        : <Typography sx={{ color: 'black', my: 2, display: 'block', }} >${item.price}</Typography>
                    }
                </TableCell>
                <TableCell align="right">
                    {item.onSale
                        ? 
                            <Typography sx={{ color: 'black', my: 2, display: 'block', }} >
                                ${item.price - (item.price/item.discount)}
                            </Typography>
                        : <Typography sx={{ color: 'black', my: 2, display: 'block', }} >${item.price}</Typography>
                    }
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}
