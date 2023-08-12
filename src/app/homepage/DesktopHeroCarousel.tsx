'use client'

import { useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import { setTimeout } from 'timers/promises';

interface heroItem {
    id: number;
    mainText: string;
    buttonText: string;
    buttonLink: string;
    image: string;
}

const carouselItems: heroItem[] = [
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
        image: 'https://images.unsplash.com/photo-1534310524055-36166a36e6f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80'
    }
]

export default function DesktopHeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollItem, setScrollItem] = useState(document.getElementById('scroll-container'));

    const intervalRef = useRef<NodeJS.Timer | null>(null);

    const maxIndex = carouselItems.length - 1;
    const scrollWidth = window.innerWidth;

    const onNext = () => {
        console.log('called')
        if(scrollItem) {
            if(currentIndex == maxIndex) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        } else {
            return;
        }
    }

    const onPrev = () => {
        if(scrollItem) {
            if(currentIndex == 0) {
                setCurrentIndex(maxIndex);
            } else {
                setCurrentIndex(currentIndex - 1);
            }
        } else {
            return;
        }
    }

    const handleClick = (newIndex: number) => {
        return setCurrentIndex(newIndex);
    }

    const resetTimeout = () => {
        if (intervalRef.current) {
          clearTimeout(intervalRef.current);
        }
    }

    // const updateCarousel = () => {
    //     for ( let i = 0; i < carouselItems.length; i++ ) {
    //         let currentIndicator = document.getElementById(`${i}`);
    //         if( i == currentIndex && currentIndicator) {
    //             currentIndicator.style.opacity = '1';
    //         } else if (currentIndicator) {
    //             currentIndicator.style.opacity = '0.5';
    //         }
    //     }
    //     let scrollFactor = currentIndex * scrollWidth;
    //     scrollItem?.scroll({left: scrollFactor, top: 0, behavior: 'smooth'});
    // }

    useEffect(() => {
        const renderedScrollItem = document.getElementById('scroll-container');
        setScrollItem(renderedScrollItem);
    }, []);

    useEffect(() => {
        resetTimeout();
        for ( let i = 0; i < carouselItems.length; i++ ) {
            let currentIndicator = document.getElementById(`${i}`);
            if( i == currentIndex && currentIndicator) {
                currentIndicator.style.opacity = '1';
            } else if (currentIndicator) {
                currentIndicator.style.opacity = '0.5';
            }
        }
        let scrollFactor = currentIndex * scrollWidth;
        scrollItem?.scroll({left: scrollFactor, top: 0, behavior: 'smooth'});
        intervalRef.current = setInterval(
            () => onNext(), 7000);
          return () => {
            resetTimeout();
          };
    }, [currentIndex]);

    return (
        <Grid item xs={12} sx={{ display: {xs: 'none', sm: 'none', md: 'flex'}, overflow: 'hidden', height: '89vh' }}>
            <Grid id='scroll-container' item xs={12} sx={{ position: 'relative', display: 'flex', height: '88vh', overflow: 'hidden', whiteSpace: 'nowrap', scrollbarWidth: 'none', scrollSnapType: 'x mandatory', scrollSnapStop: 'always' }}>
                {carouselItems.map((item) => 
                    <Box
                        key={item.id}
                        sx={{  
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: 'start', 
                        justifyContent: 'center',
                        minWidth: '100vw', 
                        height: '87vh', 
                        scrollSnapAlign: 'start',
                        backgroundImage: `url(${item.image})`, 
                        backgroundPosition: 'top', 
                        backgroundSize: 'cover', 
                        backgroundRepeat: 'no-repeat', 
                        bgcolor: '#ccccd2'
                        }}
                        >
                        <Typography 
                        variant='h1' 
                        sx={{
                            color: 'primary.main', 
                            fontWeight: 'bold', 
                            ml: 15, 
                            textShadow: '5px 5px black' 
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
                            borderRadius: '80px',
                            position: 'static', 
                            fontWeight: 'bold', 
                            boxShadow: '5px 5px black',
                            ml: 15, 
                            mt: 5,
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
                            <h2>{item.buttonText}</h2>
                        </Button>
                    </Box>
                )}
            </Grid>
            <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: '30px' }}>
                <FiberManualRecordRoundedIcon id='0' onClick={(e) => handleClick(0)} sx={{fontSize: '15px', position: 'relative', zIndex: 3, mx: 1, filter: 'brightness(0) invert(1)', opacity: 0.5, ':hover': { opacity: 1 } }}/>
                <FiberManualRecordRoundedIcon id='1' onClick={(e) => handleClick(1)} sx={{fontSize: '15px', position: 'relative', zIndex: 3, mx: 1, filter: 'brightness(0) invert(1)', opacity: 0.5, ':hover': { opacity: 1 } }}/>
                <FiberManualRecordRoundedIcon id='2' onClick={(e) => handleClick(2)} sx={{fontSize: '15px', position: 'relative', zIndex: 3, mx: 1, filter: 'brightness(0) invert(1)', opacity: 0.5, ':hover': { opacity: 1 } }}/>
            </Container>
            <ArrowBackIosNewRoundedIcon onClick={onPrev} sx={{position: 'absolute', top: '50%', zIndex: 3, left: '30px', filter: 'brightness(0) invert(1)', opacity: 0.8, ':hover': { opacity: 1 } }}/>
            <ArrowForwardIosRoundedIcon onClick={onNext} sx={{position: 'absolute', top: '50%', zIndex: 3, right: '30px', filter: 'brightness(0) invert(1)', opacity: 0.8, ':hover': { opacity: 1 } }}/>
        </Grid>
    )
}
