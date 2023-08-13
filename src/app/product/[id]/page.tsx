'use client'

import { useState, Fragment } from 'react';

import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import ProductDesktop from './ProductDesktop';
import ProductMobile from './ProductMobile';

interface PhotoItem {
    id: number;
    name: string;
    price: number;
    onSale: boolean;
    markdown: number;
    featured: boolean;
    colors: string[];
    primaryUrl: string;    
    secondaryUrl: string;
}

const item: PhotoItem = {
    id: 1,
    name: 'Grey Shirt',
    price: 25,
    onSale: true,
    markdown: 10,
    featured: false,
    colors: ['#575c69', '#edf3ff'],
    primaryUrl: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
    secondaryUrl: 'https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
}

const images: string[] = [
    'https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
]

export default function Page({ params }: { params: { id: string } }) {
    const [open, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<PhotoItem>();

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = (item: PhotoItem) => {
        setCurrentItem(item);
        setOpen(true);
      };

    const scrollToTarget = (elId: string) => {
        console.log(elId);
        let el: HTMLElement | null = document.getElementById(elId);
        console.log(el);
        el?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <Fragment>
            <Dialog                
                open={open}
                onClose={handleClose}                
                fullScreen
                fullWidth={true}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"  
                sx={{ maxwidth: '800px' }}    
            >
                <Box sx={{ position: 'static', width: '100vw' }}>
                {images.map((image, index) => 
                    <div id={index.toString()}>
                    <Box
                        key={index}
                        onClick={handleClose}
                        sx={{ 
                            mb: 2,
                            zIndex: 1,
                            width: '100vw', 
                            height: '200vh', 
                            position: 'static',
                            display: 'block',
                            backgroundPosition: "center", 
                            backgroundSize: "cover", 
                            backgroundRepeat: "no-repeat", 
                            backgroundImage: `url(${image})`,
                            ':hover': {
                                cursor: 'zoom-out',
                            }
                        }}
                    />
                    </div>
                    )}
                </Box>
                <Box sx={{position: 'fixed', top: '10px', display: 'flex', width: '100%', justifyContent: 'end'}}>
                    <IconButton onClick={handleClose} sx={{ color: 'black', bgcolor: 'rgba(255,255,255,0.7)', my: 2, mx: 4,}}>
                        <CloseOutlinedIcon sx={{ fontSize: '30px', fontWeight: 'thin' }} />
                    </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, position: 'fixed', top: '10px', flexDirection: 'column', my: 2, mx: 4, bgcolor: 'rgba(255,255,255,0.7)', borderRadius: 1, p: 2 }}>
                    {images.map((image, index) =>                         
                        <Button
                            key={index}
                            disableRipple
                            onClick={(e) => scrollToTarget(index.toString())}
                            sx={{        
                                zIndex: 2,                                 
                                height: '100px', 
                                width: '67px',
                                mb: 1,
                                opacity: 1,
                                backgroundPosition: "center", 
                                backgroundSize: "cover", 
                                backgroundRepeat: "no-repeat", 
                                backgroundImage: `url(${image})`,
                                ' :hover': {
                                    border: '1px solid',                                    
                                }
                            }}
                        >
                        </Button>
                    )}
                </Box>
            </Dialog>
            <Box sx={{ display: {xs: 'none', sm: 'none', md: 'flex'} }}>
                <ProductDesktop id={params.id} handleClickOpen={handleClickOpen}/>
            </Box>
            <Box sx={{ display: {xs: 'flex', sm: 'flex', md: 'none'} }}>
                <ProductMobile id={params.id} handleClickOpen={handleClickOpen}/>
            </Box>
        </Fragment>
    );
}