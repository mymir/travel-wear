'use client'

import { useState, Fragment } from 'react';
import { useTheme } from '@mui/material/styles';

import Dialog from '@mui/material/Dialog';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import Toolbar from '@mui/material/Toolbar';
import { SolidRating } from '@/app/components/SolidRating';

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
    const [currentImage, setCurrentImage] = useState<String>(images[0]);

    const theme = useTheme();
    const rating: number = 4.5;

    const handleClickOpen = (item: PhotoItem) => {
        setCurrentItem(item);
        setOpen(true);
      };
  
    const handleClose = () => {
        setOpen(false);
    };

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
                <Box sx={{ position: 'fixed', top: '10px', display: 'flex', flexDirection: 'column', my: 2, mx: 4, bgcolor: 'rgba(255,255,255,0.7)', borderRadius: 1, p: 2 }}>
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
            <Toolbar />
            <Container 
                maxWidth={false}
                sx={{ mx: 6, my: 2, display: 'flex' }}
            >
                <Box sx={{ height: '100vh', width: '100px', mr: 2, overflow: 'scroll', scrollbarWidth: 'none', scrollbarColor: 'transparent', scrollbarGutter: '0px'}}>
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
                        variant='h4'
                        sx={{  
                            display: 'block',
                        }}
                    >
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
                        Color: {item?.colors[0]}
                    </Typography>
                    {item?.colors.map((color, index) =>        
                        <IconButton key={index} disableRipple sx={{ borderRadius: 5, border: 'grey 2px solid', p: 0, mr: 0.5, ':hover': { border: 'black 2px solid' } }}>
                            <CircleIcon sx={{ color: {color}, fontSize: '15px' }} />
                        </IconButton>  
                    )}
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
                    <Button variant='contained' disableElevation sx={{ width: '100%', fontWeight: 'bold', py: 2, color: 'white' }}>
                        Add To Cart
                    </Button>
                </Box>
            </Container>
        </Fragment>
    );
}