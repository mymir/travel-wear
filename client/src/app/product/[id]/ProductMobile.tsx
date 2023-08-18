'use client'

import { useState, useEffect, Fragment } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';

import { SolidRating } from '../../components/SolidRating';
import DetailAccordian from '../../components/DetailAccordian';

import { Product } from '../../productInterface';

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

export default function ProductMobile({ productItem, handleClickOpen, updateCart }: { productItem?: Product, handleClickOpen: Function, updateCart: Function }) {
    const [scrollWidth, setScrollWidth] = useState(0);
    const [scrollItem, setScrollItem] = useState< HTMLElement| null >(null);

    const highLightCurrent = (elId: number) => {
        productItem?.photos.forEach((_photo, index) => {
            let elButton: HTMLElement | null = document.getElementById(index + '-mobile-button');
            if (index == elId && elButton) {
                elButton.style.opacity = '1';
            } else if (elButton) {
                elButton.style.opacity = '0.5';
            }
        })
    }

    const handleScroll = () => {
        if(!scrollItem || !productItem) {
            return;
        }

        const maxScroll = scrollItem.scrollWidth - scrollItem.clientWidth;
        const maxIndex = (productItem.photos.length) - 1;

        const currentScroll = scrollItem.scrollLeft / maxScroll * 100;
        const scrollIndex = Math.round((currentScroll * maxIndex) / 100);

        let currIndex = 0;
        if(scrollIndex > maxIndex) {
            currIndex = maxIndex;
        } else {
            currIndex = scrollIndex;
        }
        highLightCurrent(currIndex);
        return;
    }

    const selectPhoto = (elId: number) => {
        highLightCurrent(elId);
        let scrollFactor = elId * scrollWidth;
        scrollItem?.scroll({left: scrollFactor, top: 0, behavior: 'instant'});
    }

    useEffect(() => {
        const renderedScrollItem = document.getElementById('product-scroll-container');
        
        selectPhoto(0);
        setScrollItem(renderedScrollItem);
        setScrollWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        if(scrollItem) {
            scrollItem?.addEventListener('scroll', handleScroll);
            return () => scrollItem && scrollItem?.removeEventListener('scroll', handleScroll);
        }
    });

    return (
        <Fragment>
            <Container maxWidth={false} sx={{ height: '100%', p:0, m:0 }}>
                <Box
                    id='product-scroll-container'
                    sx={{ 
                        width: '100vw',
                        position: 'relative', 
                        display: 'flex', 
                        height: '70vh', 
                        overflowY: 'hidden', 
                        overflowX: 'auto', 
                        whiteSpace: 'nowrap', 
                        scrollSnapType: 'x mandatory', 
                        scrollSnapStop: 'always',
                    }}
                >
                    {productItem?.photos.map((photo, index) =>
                        <Button
                        key={index}
                        onClick={(e) => handleClickOpen(productItem)}
                        disableRipple
                        sx={{ 
                            minWidth: '100vw',
                            height: 'inherit',
                            bgcolor: 'transparent', 
                            scrollSnapAlign: 'start',
                            backgroundPosition: "center", 
                            backgroundSize: "cover", 
                            backgroundRepeat: "no-repeat", 
                            backgroundImage: `url(${photo})`,
                        }}
                        />
                    )}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                {productItem?.photos.map((image, index) => 
                    <Button
                            key={index}
                            id={index + '-mobile-button'}
                            onClick={(e) => selectPhoto(index)}
                            disableRipple
                            sx={{         
                                position: 'relative',                                
                                height: '80px', 
                                width: '70px',
                                m: 1,
                                opacity: 1,
                                borderRadius: 0,
                                backgroundPosition: "center", 
                                backgroundSize: "cover", 
                                backgroundRepeat: "no-repeat", 
                                backgroundImage: `url(${image})`,
                            }}
                        >
                    </Button>
                )}
                </Box>
                <Box sx={{ m: 2 }}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold', p:0 }}>
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
                    <Typography 
                        variant='h6'
                        sx={{  
                            display: 'block',
                            my:1
                        }}
                    >
                        ${productItem?.price}.00
                    </Typography>
                    <Divider/>
                    <Typography 
                        variant='body1'
                        sx={{  
                            display: 'block',
                            fontWeight: 'bold',
                            mt:2
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
                            mt: 2
                        }}
                    >
                        Size:
                    </Typography>
                    {[{size: 'xs', soldOut: true},{size: 'sm', soldOut: false},{size: 'md', soldOut: true},{size: 'lg', soldOut: false},{size: 'xl', soldOut: false},{size: 'xxl', soldOut: false}].map((size, index) =>        
                        <Button key={index} disabled={size.soldOut} disableRipple sx={{ borderRadius: 1, color: 'black', border: 'grey 2px solid', p: 1, m: 0.5, ml: 0, ':hover': { border: 'black 2px solid' }, fontSize: '12px', minWidth: '12px', width: '40px' }}>
                            {size.size}
                        </Button>  
                    )}
                    <Button onClick={() => updateCart(productItem)} variant='contained' color='secondary' disableElevation sx={{ width: '100%', fontWeight: 'bold', py: 2, mt: 4, color: 'white' }}>
                        Add To Cart
                    </Button>
                    <Button variant='contained' disableElevation sx={{ width: '100%', fontWeight: 'bold', color: 'white', py: 2, mt: 1 }}>
                        Add To Favorites
                    </Button>
                    <Typography variant='body2' sx={{ mt: 2 }}>
                        Free standard shipping on all orders.
                    </Typography>
                    <Typography variant='body2' sx={{ mb: 4 }}>
                        Free returns within 2 weeks.
                    </Typography>
                    <DetailAccordian itemDetails={details}/>
                </Box>
            </Container> 
        </Fragment>
    );
}