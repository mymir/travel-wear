'use client'

import { useState } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import CircleIcon from '@mui/icons-material/Circle';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

import { SolidRating } from '../../components/SolidRating';
import DetailAccordian from '@/app/components/DetailAccordian';

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

const item: PhotoItem = {
    id: 1,
    name: 'Grey Graphic T-Shirt',
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

export default function ProductDesktop({ id, handleClickOpen }: { id: string, handleClickOpen: Function }) {
    const [currentImage, setCurrentImage] = useState<String>(images[0]);
    const rating: number = 4.5;

    const selectPhoto = (elId: number) => {
        images.forEach((_image, index) => {
            let elButton: HTMLElement | null = document.getElementById(index + 'Button');
            if (index == elId && elButton) {
                elButton.style.opacity = '1';
            } else if (elButton) {
                elButton.style.opacity = '0.5';
            }
        })
        if(images[elId]) {
            setCurrentImage(images[elId]);
        }
    }

    return (
        <Container maxWidth={false} sx={{width: '100%', height: '100%', display: 'flex', m: 2}}>
            <Toolbar />
                <Box sx={{ display: 'block', height: '100vh', width: '100px', mr: 1, overflow: 'scroll' }}>
                    {images.map((image, index) => 
                    <>
                        {index == 0 
                        ?
                            <Button
                                key={index}
                                id={index + 'Button'}
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
                        :
                            <Button
                                key={index}
                                id={index + 'Button'}
                                onClick={(e) => selectPhoto(index)}
                                disableRipple
                                sx={{         
                                    position: 'relative',                                
                                    height: '150px', 
                                    width: '100px',
                                    mb: 1,
                                    opacity: 0.5,
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
                        }
                    </>
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
                        onClick={(e) => handleClickOpen(item)}
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
                <Box sx={{ ml: 10 }}>
                    <Typography 
                        variant='h5' sx={{ fontWeight: 'bold', p:0, mb:1 }}>
                        {item?.name}
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <SolidRating startValue={rating} />
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
                    <Typography 
                        variant='h6'
                        sx={{  
                            my: 2,
                            display: 'block',
                        }}
                    >
                        ${item?.price}.00
                    </Typography>
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
                    {item?.colors.map((color, index) =>        
                        <IconButton key={index} disableRipple sx={{ borderRadius: 5, border: 'grey 2px solid', p: 0, mr: 0.5, ':hover': { border: 'black 2px solid' } }}>
                            <CircleIcon sx={{ color: {color}, fontSize: '15px' }} />
                        </IconButton>  
                    )}
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
            <Toolbar />
        </Container>
    );
}