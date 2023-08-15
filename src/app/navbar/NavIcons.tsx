'use client'

import * as React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const navIcons = [
    {
        id: 0,
        label: 'Search',
        route: '/search',
        icon: <SearchOutlinedIcon/>
    },
    {
        id: 1,
        label: 'Login',
        route: '/login',
        icon: <PersonOutlineOutlinedIcon/>
    },
    {
        id: 2,
        label: 'Checkout',
        route: '/checkout',
        icon: <ShoppingCartOutlinedIcon/>
    }
]

export default function NavIcons() {
    return (
        <Box sx={{ display: 'flex' }}>
            {navIcons.map((item) => (
              <IconButton key={item.id} aria-label={item.label} sx={{ color: 'black', px: { xs: 0.5, sm: 1, md: 1 } }} component='a' href={item.route}>
                {item.icon}
              </IconButton>
            ))}
          </Box>
    );
};