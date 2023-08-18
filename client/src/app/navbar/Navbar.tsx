'use client'

import * as React from 'react';
import { useRouter } from 'next/navigation';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import NavIcons from './NavIcons';
import NavLinks from './NavLinks';
import NavDrawer from './NavDrawer';


export default function DrawerAppBar() {
  const router = useRouter();

  return (
    <AppBar component="nav" position="sticky" sx={{ zIndex: 4, boxShadow: 'none', bgcolor: '#fdfdfd', color: 'black', borderBlock: '1px solid rgba(0,0,0,0.2)', px: 2 }}>
      <Toolbar sx={{ minHeight: 0 }}>
        <NavDrawer />
        <Button
          disableRipple  
          onClick={() => router.push('/home')}
          size='large'
          sx={{ 
            display: { xs: 'none', sm: 'none', md: 'block' }, 
            color: 'black',
            fontWeight: 'bold',
            ':hover': { color: 'white' }
          }}
        >
          TravelWear
        </Button>
        <Box 
          sx={{ 
            display: { xs: 'flex', sm: 'flex', md: 'none' }, 
            textAlign: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <Button
            disableRipple  
            component="a"
            size='large'
            href='/home'
            sx={{ 
              display: { xs: 'flex', sm: 'flex', md: 'none' },
              color: 'black',
              fontWeight: 'bold',
              ':hover': { color: 'white' }
            }}
          >
            TW
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <NavLinks/>
        </Box>
        <NavIcons />
      </Toolbar>
    </AppBar>
  );
}