import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import NavIcons from './NavIcons';
import NavLinks from './NavLinks';
import NavDrawer from './NavDrawer';


export default function DrawerAppBar() {
  return (
    <AppBar component="nav" position="sticky" sx={{ zIndex: 2, px: 5, boxShadow: 'none', borderBlock: '1px solid white' }}>
      <Toolbar>
        <NavDrawer />
        <Button
          disableRipple  
          component="a"
          size='large'
          href='/'
          sx={{ 
            display: { xs: 'none', sm: 'block' }, 
            color: 'primary.contrastText',
            fontWeight: 'bold',
            ':hover': { color: 'white' }
          }}
        >
          TravelWear
        </Button>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <NavLinks/>
        </Box>
        <NavIcons />
      </Toolbar>
    </AppBar>
  );
}