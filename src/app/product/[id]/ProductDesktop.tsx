'use client'

import { useState, useEffect, useRef } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import CircleIcon from '@mui/icons-material/Circle';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

import { SolidRating } from '../../components/SolidRating';
import DetailAccordian from '@/app/components/DetailAccordian';

import { Product } from '@/app/productInterface';

interface Detail {
    id: number;
    label: string;
    text: string[];
}

const details: Detail[] = [
    {
        id: 0,
        label: 'Notes',
        text: ['Machine washable','100% cotton','Made in the USA']
    },
    {
        id: 1,
        label: 'Details',
        text: ['High rise','Regular fit','Pullover']
    },
    {
        id: 2,
        label: 'Brand',
        text: ['Brand1: Classic Collection']
    },
]

export default function ProductDesktop({ productItem, handleClickOpen }: { productItem?: Product, handleClickOpen: Function }) {
    const [currentImage, setCurrentImage] = useState<String>();

    useEffect(() => {
        selectPhoto(0);
    }, []);

    const selectPhoto = (elId: number) => {
        productItem?.photos.forEach((_photo, index) => {
            let elButton: HTMLElement | null = document.getElementById(index + 'desktop-button');
            if (index == elId && elButton) {
                elButton.style.opacity = '1';
            } else if (elButton) {
                elButton.style.opacity = '0.5';
            }
        })
        if(productItem?.photos[elId]) {
            setCurrentImage(productItem?.photos[elId]);
        }
        console.log(productItem);
    }

    return (
        <Container maxWidth={false} sx={{width: '100', height: '100%', display: 'flex', my: 2, p: 0}}>
                <Box sx={{ display: 'block', height: '100vh', width: '100px', mr: 1, overflow: 'scroll' }}>
                    {productItem?.photos.map((image, index) => 
                    <Button
                            key={index}
                            id={index + 'desktop-button'}
                            onClick={(e) => selectPhoto(index)}
                            disableRipple
                            sx={{         
                                position: 'relative',                                
                                height: '150px', 
                                width: '100px',
                                mb: 1,
                                opacity: 1,
                                borderRadius: 0,
                                backgroundPosition: "center", 
                                backgroundSize: "cover", 
                                backgroundRepeat: "no-repeat", 
                                backgroundImage: `url(${image})`,
                                ':active, :hover': {
                                    opacity: 1
                                }
                            }}
                        >
                    </Button>
                    )}
                </Box>
                <Box
                    sx={{ 
                        display: 'block',
                        height: '100vh', 
                        width: '40vw', 
                        backgroundPosition: "center", 
                        backgroundSize: "cover", 
                        backgroundRepeat: "no-repeat", 
                        backgroundImage: `url(${currentImage})`,
                    }}
                >
                    <Button
                        onClick={(e) => handleClickOpen(productItem)}
                        disableRipple
                        sx={{ 
                            position: 'relative',
                            width: '100%',
                            height: 'inherit',
                            right: 0,
                            left: 0,
                            p: 0,
                            m: 0,
                            zIndex: 1,
                            bgcolor: 'transparent', 
                            ':hover': {
                                bgcolor: 'transparent', 
                                cursor: 'zoom-in',
                            }
                        }}
                    />
                </Box>
                <Box sx={{ ml: 10, width: '35vw' }}>
                    <Typography 
                        variant='h5' sx={{ fontWeight: 'bold', p:0, mb:1 }}>
                        {productItem?.name}
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <SolidRating startValue={productItem?.rating} />
                        <Typography 
                            variant='body2'
                            component='a'
                            sx={{  
                                display: 'flex',
                            }}
                        >
                            (1,245)
                        </Typography>
                    </Box>
                    {productItem?.onSale
                        ? 
                        <Box sx={{display: 'flex', my: 2, alignItems: 'center'}}>
                            <Typography variant='h6' sx={{ mx:1, display: 'inline-flex', color: 'primary.main' }} >
                                ${productItem?.price - (productItem?.price/productItem?.discount)}
                            </Typography>
                            <Chip label={`save ${productItem?.discount}%`} variant="filled" size="small" sx={{ display: 'inline-flex', fontWeight: 'bold', color: 'white', bgcolor: 'primary.main' }} />
                            <Typography variant='h6' sx={{ mx:1, display: 'inline-flex', color: 'grey', textDecoration: 'line-through' }} >
                                ${productItem?.price}
                            </Typography>
                        </Box>
                        : <Typography variant='h6' sx={{ color: 'black', my: 2, display: 'block', }} >${productItem?.price}</Typography>
                    }
                    <Divider/>
                    <Typography 
                        variant='body1'
                        sx={{  
                            display: 'block',
                            fontWeight: 'bold',
                            mt: 3,
                            mb: 1
                        }}
                    >
                        Color:
                    </Typography>
                    {/* {item?.colors.map((color, index) =>        
                        <IconButton key={index} disableRipple sx={{ borderRadius: 5, border: 'grey 2px solid', p: 0, mr: 0.5, ':hover': { border: 'black 2px solid' } }}>
                            <CircleIcon sx={{ color: {color}, fontSize: '15px' }} />
                        </IconButton>  
                    )} */}
                    <Typography 
                        variant='body1'
                        sx={{  
                            display: 'block',
                            fontWeight: 'bold',
                            mt: 4,
                            mb: 1
                        }}
                    >
                        Size:
                    </Typography>
                    {[{size: 'xs', soldOut: true},{size: 'sm', soldOut: false},{size: 'md', soldOut: true},{size: 'lg', soldOut: false},{size: 'xl', soldOut: false},{size: 'xxl', soldOut: false}].map((size, index) =>        
                        <Button key={index} disabled={size.soldOut} disableRipple sx={{ borderRadius: 1, color: 'black', border: 'grey 2px solid', p: 1, m: 0.5, ml: 0, ':hover': { border: 'black 2px solid' }, fontSize: '12px', minWidth: '12px', width: '40px' }}>
                            {size.size}
                        </Button>  
                    )}
                    <Box sx={{ display: 'flex', mt: 4, mb: 2 }}>
                        <Button variant='contained' color='secondary' disableElevation sx={{ display: 'flex', flexGrow: 1, fontWeight: 'bold', py: 2, color: 'white' }}>
                            Add To Cart
                        </Button>
                        <Button variant='contained' disableElevation sx={{ display: 'flex', fontWeight: 'bold', color: 'white', minWidth: 0, p: 2, ml: 1}}>
                            <FavoriteBorderRoundedIcon id='heart-border' sx={{position: 'absolute', opacity: 1}}/>
                            <FavoriteRoundedIcon id='heart-filled' sx={{pposition: 'absolute', opacity: 0}}/>
                        </Button>
                    </Box>
                    <Typography variant='body2' sx={{ mb: 0 }}>
                        Free standard shipping on all orders.
                    </Typography>
                    <Typography variant='body2' sx={{ mb: 4 }}>
                        Free returns within 2 weeks.
                    </Typography>
                    <DetailAccordian itemDetails={details}/>
                </Box>
        </Container>
    );
}