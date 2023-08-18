'use client'

import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import ApparelDialog from './ApparelDialog'

import { Product } from '../productInterface';

export default function MainDisplay({apparel, spacing=2}: {apparel: Product[], spacing?: number}) {
    const router = useRouter()

    const [open, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<Product>();

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleClickOpen = (item: Product) => {
      setOpen(true);
      setCurrentItem(item);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLike = (elId: String) => {
        const inactive = document.getElementById(`${elId}-inactive`);
        const active = document.getElementById(`${elId}-active`);
        if(inactive && active) {
            console.log('active:' + active)
            active.style.opacity = Math.abs(Number(active.style.opacity) - 1).toString();
        }
    }
    
    return (
        <Grid container item spacing={spacing} xs={12} sm={12} md={10}>
            <Dialog                
                open={open}
                onClose={handleClose}
                fullScreen={fullScreen}
                fullWidth={true}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"  
                sx={{ maxwidth: '800px' }}    
            >
                <DialogTitle id="scroll-dialog-title" sx={{ width: '100%', display: 'flex', justifyContent: 'end', p: 1 }}>
                    <IconButton onClick={handleClose}>
                        <CloseOutlinedIcon />
                    </IconButton>
                </DialogTitle>
                <ApparelDialog item={currentItem}/>
            </Dialog>
            {apparel.map((item) => 
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                    {item.isFeatured 
                    ?
                    <Box
                        sx={{ 
                            position: 'relative',
                            width: '100%',
                            height: {xs: '130vw', sm: '65vw', md: '28vw'},
                            p: 0,
                            m: 0,
                            bgcolor: 'background.paper', 
                            borderRadius: '5px',
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: `url(${item.photos[0]})`,
                            ':hover': {
                                cursor: 'pointer',
                                backgroundImage: `url(${item.photos[1]})`,
                            },
                            ':hover .interaction': {
                                display: 'flex'
                            }
                        }}
                    >
                        <Button
                            onClick={() => router.push(`/product/${item.id}`)}
                            disableRipple
                            sx={{ 
                                position: 'absolute',
                                height: 'inherit',
                                right: 0,
                                left: 0,
                                p: 0,
                                m: 0,
                                zIndex: 1,
                                bgcolor: 'transparent', 
                                ':hover': {
                                    bgcolor: 'transparent', 
                                }
                            }}
                        />
                        <Box className="interaction" sx={{ display: 'none', height: '100%', width: '100%', flexDirection: 'column'}}>
                            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'end', justifyContent: 'end' }}>
                                <IconButton onMouseDown={(e) => handleLike(`${item.id}-like`)} disableRipple sx={{ zIndex: 2, m: 1, bgcolor: 'rgba(255,255,255,0.7)', ':active .like-active': { scale: '1.1', transition: '0.2s' } }}>
                                    <FavoriteBorderRoundedIcon id={`${item.id}-like-inactive`} sx={{ position: 'absolute', opacity: 1 }} />
                                    <FavoriteRoundedIcon id={`${item.id}-like-active`} className='like-active' sx={{ color: 'primary.main', position: 'relative', opacity: 0}} />
                                </IconButton>
                            </Box>
                            <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center', pb: 2 }}>
                                <Button onClick={(e) => handleClickOpen(item)} size='large' variant='contained' sx={{ zIndex: 2, px: 2, fontWeight: 'bold', borderRadius: '5px' }}>
                                    Quick Preview
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    :
                        <Box
                            sx={{ 
                                position: 'relative',
                                width: '100%',
                                height: {xs: '130vw', sm: '65vw', md: '28vw'},
                                p: 0,
                                m: 0,
                                bgcolor: 'background.paper', 
                                borderRadius: '5px',
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundImage: `url(${item.photos[0]})`,
                                ':hover': {
                                    cursor: 'pointer',
                                    backgroundImage: `url(${item.photos[1]})`,
                                },
                                ':hover .interaction': {
                                    display: 'flex'
                                }
                            }}
                        >
                            <Button
                                onClick={() => router.push(`/product/${item.id}`)}
                                disableRipple
                                sx={{ 
                                    position: 'absolute',
                                    height: 'inherit',
                                    right: 0,
                                    left: 0,
                                    p: 0,
                                    m: 0,
                                    zIndex: 1,
                                    bgcolor: 'transparent', 
                                    ':hover': {
                                        bgcolor: 'transparent', 
                                    }
                                }}
                            />
                            <Box className="interaction" sx={{ display: 'none', height: '100%', width: '100%', flexDirection: 'column'}}>
                                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'end', justifyContent: 'end' }}>
                                    <IconButton onMouseDown={(e) => handleLike(`${item.id}-like`)} disableRipple sx={{ zIndex: 2, m: 1, bgcolor: 'rgba(255,255,255,0.7)', ':active .like-active': { scale: '1.1', transition: '0.2s' } }}>
                                        <FavoriteBorderRoundedIcon id={`${item.id}-like-inactive`} sx={{ position: 'absolute', opacity: 1 }} />
                                        <FavoriteRoundedIcon id={`${item.id}-like-active`} className='like-active' sx={{ color: 'primary.main', position: 'relative', opacity: 0}} />
                                    </IconButton>
                                </Box>
                                <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center', pb: 2 }}>
                                    <Button onClick={(e) => handleClickOpen(item)} size='large' variant='contained' sx={{ zIndex: 2, px: 2, fontWeight: 'bold', borderRadius: '5px' }}>
                                        Quick Preview
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    }
                    <Box sx={{ textAlign: 'center', mt: 1, p: 1, bgcolor: 'background.paper', borderRadius: '0 0 10px 10px' }}>
                        <Typography variant='body1' sx={{ color: 'black' }} >{item.name}</Typography>
                        {item.onSale
                        ? 
                        <Box>
                            <Typography variant='body2' sx={{ mx:0.5, display: 'inline-flex', color: 'grey', textDecoration: 'line-through' }} >
                                ${item.price}
                            </Typography>
                            <Typography variant='body2' sx={{ mx:0.5, display: 'inline-flex', color: 'red' }} >
                                ${item.price - (item.price/item.discount)}
                            </Typography>
                        </Box>
                        : <Typography variant='body2' sx={{ color: 'black' }} >${item.price}</Typography>
                        }
                        {/* {item.colors.map((color, index) =>        
                            <IconButton key={index} disableRipple sx={{ borderRadius: 5, border: 'grey 2px solid', p: 0, mr: 0.5, ':hover': { border: 'black 2px solid' } }}>
                                <CircleIcon sx={{ color: {color}, fontSize: '15px' }} />
                            </IconButton>  
                        )} */}
                    </Box>
                </Grid>
            )}
        </Grid>
    )
}