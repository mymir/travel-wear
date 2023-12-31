'use client'

import { useState } from 'react';

import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import DrawerAccordion from '../components/DrawerAccordian';
import  { navLinks } from '../links'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar
  }));

export default function NavDrawer() {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

    const drawerWidth = 240;

    return (
        <Box sx={{ zIndex: 5, flexGrow: 1, display: { xs: 'flex', sm: 'flex',md: 'none' }}}>
            <Button
                size="large"
                aria-label="nav aria"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerOpen}
                color="inherit"
            >
                <MenuIcon />
            </Button>
            <Drawer 
                id="drawer-appbar" 
                variant="persistent"
                anchor="left"
                open={open}
                sx={{
                    width: drawerWidth,
                    position: 'absolute',
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                      },
                }}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose} sx={{ minWidth: 0 }}>
                        <CloseOutlinedIcon />
                    </IconButton>
                </DrawerHeader>
                <DrawerAccordion linkItems={navLinks}/>
                <Divider />
            </Drawer>
        </Box>
    );  
  };