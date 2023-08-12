
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';

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
        mainText: 'Featured Jacket',
        buttonLink: '/featured',
        buttonText: 'Shop Now',
        image: 'https://images.unsplash.com/photo-1534310524055-36166a36e6f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80'
    }
]

export default function MobileHeroCarousel() {
    return (
        <Grid item xs={12} sx={{ display: {xs: 'flex', sm: 'flex', md: 'none' }, overflow: 'hidden', height: '89vh' }}>
            <Grid id='scroll-container' item xs={12} sx={{ position: 'relative', display: 'flex', height: '88vh', overflowY: 'hidden', overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none', scrollSnapType: 'x mandatory', scrollSnapStop: 'always' }}>
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
        </Grid>
    )
}
