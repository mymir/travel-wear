'use client'

import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface heroItem {
    id: number;
    mainText: string;
    buttonText: string;
    buttonLink: string;
    image: string;
}

const carouselItems: heroItem[] = [
    {
        id: -1,
        mainText: 'Featured Jackets',
        buttonLink: '/featured',
        buttonText: 'Shop Now',
        image: 'https://images.unsplash.com/photo-1510853851847-5c02796e8c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2730&q=80'
    },
    {
        id: 0,
        mainText: 'Summer Sale',
        buttonLink: '/sale',
        buttonText: 'Shop Now',
        image: 'https://images.unsplash.com/photo-1586396847415-2c76ae7e79fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    },
    {
        id: 1,
        mainText: 'New Collection',
        buttonLink: '/new',
        buttonText: 'Shop Now',
        image: 'https://images.unsplash.com/photo-1610481960145-a5e24e5c94fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    },
    {
        id: 2,
        mainText: 'Featured Jackets',
        buttonLink: '/featured',
        buttonText: 'Shop Now',
        image: 'https://images.unsplash.com/photo-1510853851847-5c02796e8c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2730&q=80'
    },
    {
        id: 3,
        mainText: 'Summer Sale',
        buttonLink: '/sale',
        buttonText: 'Shop Now',
        image: 'https://images.unsplash.com/photo-1586396847415-2c76ae7e79fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    },
]

export default function MobileHeroCarousel() {
    const [scrollItem, setScrollItem] = useState< HTMLElement| null >(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isDisplayed, setIsDisplayed] = useState(false);

    const highLightCurrent = (elId: number) => {
        carouselItems.forEach((_photo, index) => {
            let elDot: HTMLElement | null = document.getElementById(`mobile-hero-${index}`);
            if (index == elId && elDot) {
                elDot.style.opacity = '1';
            } else if (elDot) {
                elDot.style.opacity = '0.5';
            }
        })
    }

    const handleScroll = () => {
        if(!scrollItem) {
            return;
        }

        if(scrollItem.scrollLeft == (0)) {
            scrollItem.scroll({left: scrollItem.scrollWidth - scrollItem.clientWidth - window.innerWidth, top: 0, behavior: 'instant'});
        } 

        if(scrollItem.scrollLeft == (scrollItem.scrollWidth - scrollItem.clientWidth)) {
            scrollItem.scroll({left: window.innerWidth, top: 0, behavior: 'instant'});
        }

        const maxScroll = scrollItem.scrollWidth - scrollItem.clientWidth;
        const maxIndex = (carouselItems.length) - 1;

        const currentScroll = scrollItem.scrollLeft / maxScroll * 100;
        const scrollIndex = Math.round((currentScroll * maxIndex) / 100);

        let currIndex = 0;
        if(scrollIndex == maxIndex) {
            currIndex = 1;
        } else if(scrollIndex == 0) {
            currIndex = maxIndex - 1;
        }
        else {
            currIndex = scrollIndex;
        }
        highLightCurrent(currIndex - 1);
        setIsDisplayed(true);
        return;
    }

    useEffect(() => {
        const renderedScrollItem = document.getElementById('mobile-scroll-container');
        setScrollItem(renderedScrollItem);
    }, []);

    useEffect(() => {
        if(scrollItem) {
            scrollItem?.addEventListener('scroll', handleScroll);
            return () => scrollItem && scrollItem?.removeEventListener('scroll', handleScroll);
        }
    });

    useEffect(() => {
        if(scrollItem) {
            setIsLoading(false);
        }
    }, [scrollItem]);

    useEffect(() => {
        scrollItem?.scroll({left: window.innerWidth, top: 0, behavior: 'instant'});
        highLightCurrent(0);
    }, [isLoading]);

    return (
        <Grid item xs={12} sx={{ display: {xs: 'flex', sm: 'flex', md: 'none' }, overflow: 'hidden', height: '89vh' }}>
            <Grid id='mobile-scroll-container' item xs={12} sx={{ position: 'relative', display: 'flex', height: '88vh', overflowY: 'hidden', overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none', scrollSnapType: 'x mandatory', scrollSnapStop: 'always' }}>
                {carouselItems.map((item) => 
                    <Box
                        key={item.id}
                        sx={{
                            display: 'flex', 
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '100vw', 
                            visibility: `${isDisplayed ? 'visible' : 'hidden'}`, 
                            height: `${isDisplayed ? '87vh' : '0px'}`,
                            scrollSnapAlign: 'start',
                            backgroundImage: `url(${item.image})`, 
                            backgroundPosition: 'top', 
                            backgroundSize: 'cover', 
                            backgroundRepeat: 'no-repeat', 
                            bgcolor: '#ccccd2'
                        }}
                    >
                        <Typography 
                        variant='h4' 
                        sx={{
                            display: 'flex',
                            color: 'primary.main', 
                            fontWeight: 'bold', 
                            textShadow: '5px 5px black',
                            textAlign: 'center'
                        }}
                        >
                        {item.mainText}
                        </Typography>
                        <Button
                        disableRipple            
                        component='a'
                        variant='contained'
                        href={item.buttonLink}
                        color='secondary'
                        sx={{
                            display: 'flex',
                            borderRadius: '80px',
                            position: 'static', 
                            fontWeight: 'bold', 
                            boxShadow: '5px 5px black',
                            px: 4,
                            ':hover': {
                                boxShadow: '4px 4px black',
                                transition: '0.2s'
                            },
                            ':active': {
                                translate: '5px 5px',
                                boxShadow: '0px 0px black',
                                transition: '0.2s'
                            }
                        }}
                        >
                            <h4>{item.buttonText}</h4>
                        </Button>
                    </Box>
                )}
            </Grid>
            <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: '10%' }}>
                <FiberManualRecordRoundedIcon id='mobile-hero-0' sx={{fontSize: '15px', position: 'relative', zIndex: 3, mx: 1, filter: 'brightness(0) invert(1)', opacity: 0.5, ':hover': { opacity: 1 } }}/>
                <FiberManualRecordRoundedIcon id='mobile-hero-1' sx={{fontSize: '15px', position: 'relative', zIndex: 3, mx: 1, filter: 'brightness(0) invert(1)', opacity: 0.5, ':hover': { opacity: 1 } }}/>
                <FiberManualRecordRoundedIcon id='mobile-hero-2' sx={{fontSize: '15px', position: 'relative', zIndex: 3, mx: 1, filter: 'brightness(0) invert(1)', opacity: 0.5, ':hover': { opacity: 1 } }}/>
            </Container>
        </Grid>
    )
}
