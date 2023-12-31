'use client'

import { Fragment } from 'react';
import { useRouter } from 'next/navigation'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

import { Product } from '../productInterface';
import { useAuthContext } from '../../context/store';

const ApparelDialog = ({item}: {item: Product | undefined}) => {
    const {uid} = useAuthContext();
    const router = useRouter()
    
    async function updateCart(product?: Product) {
        const res = await fetch(`http://localhost:8080/travelwear/shoppers/${uid}/cart`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
        });
        
        if (!res.ok) {
          throw new Error('Failed to add to cart');
        }
        
        const json = await res.json();
    }

    return (
        <Fragment>
            <DialogContent dividers={true}>
                <Grid 
                    container 
                    spacing={2}
                >
                    <Grid item xs={12} sm={12} md={7}>
                        <Box 
                            sx={{ 
                                height: '60vh', 
                                width: '100%', 
                                backgroundPosition: "center", 
                                backgroundSize: "cover", 
                                backgroundRepeat: "no-repeat", 
                                backgroundImage: `url(${item?.photos[0]})`,
                                ':hover .interaction': {
                                    display: 'flex'                              
                                }
                            }}
                        >
                            <Box className="interaction" sx={{ position: 'relative', display: 'none', alignItems: 'end', justifyContent: 'end' }}>
                                <IconButton disableRipple sx={{ m: 1, bgcolor: 'rgba(255,255,255,0.7)' }}>
                                    <FavoriteBorderRoundedIcon sx={{ position: 'absolute', opacity: 1, ':hover': { opacity: 0 } }} />
                                    <FavoriteRoundedIcon sx={{ color: 'primary.main', position: 'relative', opacity: 0, ':hover': { opacity: 1 } }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        <Typography 
                            variant='h4'
                            sx={{  
                                display: 'block',
                            }}
                        >
                            {item?.name}
                        </Typography>
                        <Typography 
                            variant='h6'
                            sx={{  
                                display: 'block',
                            }}
                        >
                            ${item?.price}.00
                        </Typography>
                        <Divider/>
                        <Typography 
                            variant='h6'
                            sx={{  
                                display: 'block',
                            }}
                        >
                            {/* Color: {item?.colors[0]} */}
                            Color:
                        </Typography>
                        {/* {item?.colors.map((color, index) =>        
                            <IconButton key={index} disableRipple sx={{ borderRadius: 5, border: 'grey 2px solid', p: 0, mr: 0.5, ':hover': { border: 'black 2px solid' } }}>
                                <CircleIcon sx={{ color: {color}, fontSize: '15px' }} />
                            </IconButton>  
                        )} */}
                        <Typography 
                            variant='h6'
                            sx={{  
                                display: 'block',
                            }}
                        >
                            Size:
                        </Typography>
                        {['xs','sm','md','lg','xl'].map((size, index) =>        
                            <Button key={index} disableRipple sx={{ borderRadius: 5, border: 'grey 2px solid', p: 0, mr: 0.5, ':hover': { border: 'black 2px solid' } }}>
                                {size}
                            </Button>  
                        )}
                        <Button onClick={() => updateCart(item)} variant='contained' disableElevation sx={{ width: '100%', fontWeight: 'bold', py: 2, color: 'white' }}>
                            Add To Cart
                        </Button>
                        <Button onClick={() => router.push(`/product/${item?.id}`)} variant='contained' disableElevation color='secondary' sx={{ width: '100%', fontWeight: 'bold', py: 2, color: 'white' }}>
                            View Details
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Fragment>
    );
};

export default ApparelDialog;