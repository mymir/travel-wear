'use client'

import { useState, useEffect, useRef, Fragment } from 'react';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';

import ProductDesktop from './ProductDesktop';
import ProductMobile from './ProductMobile';

import { Product } from '@/app/productInterface';

export default function Page({ params }: { params: { id: string } }) {
    const [isLoading, setIsLoading] = useState(true);
    const [productItem, setProductItem] = useState<Product>();
    const [currentImage, setCurrentImage] = useState<String>();
    const didFetchRef = useRef(false);

    function mapItem(json: Product)  {
        const currProduct = {
            id: json.id, 
            name: json.name,
            price: json.price,
            category: json.category,
            onSale: json.onSale,
            discount: json.discount,
            isNew: json.isNew,
            isFeatured: json.isFeatured,
            gender: json.gender,
            rating: json.rating,
            sizes: json.sizes,
            photos: json.photos,
        }
        return currProduct;
    }
    
    async function fetchData() {
        const res = await fetch('http://localhost:8080/travelwear/product/' + params.id).then(async(res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }
        
            const json = await res.json();
            const newProduct: Product = mapItem(json)
            setProductItem(newProduct);
            setCurrentImage(newProduct.photos[0]);
            setIsLoading(false)
        });
    }

    useEffect(() => {
        if(!didFetchRef.current){
        didFetchRef.current = true;
        fetchData();
        }
    }, []);











    const [open, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<Product>();

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = (item: Product) => {
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
                {currentItem?.photos.map((image, index) => 
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
                    {currentItem?.photos.map((image, index) =>                         
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
            <Box sx={{ py: 2, px: 2, display: {xs: 'none', sm: 'none', md: 'block'} }}>
                <Box sx={{display: 'flex'}}>
                    <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} color="black" sx={{ px: 3, py: 1 }}>
                        <Link underline="hover" color="black" href="/home" variant='body2'>
                            TravelWear
                        </Link>
                        <Link underline="hover" color="black" href="/women" variant='body2'>
                            women
                        </Link>
                        <Link underline="hover" color="black" href="/women/tops" variant='body2'>
                            tops
                        </Link>
                        <Typography color="rgba(0,0,0,0.5)" variant='body2'>{productItem?.name}</Typography>
                    </Breadcrumbs>
                    <Link underline="hover" color="black" href="/women/tops" variant='body2' sx={{ display: 'flex', flexGrow: 1, px: 2, py: 1, justifyContent: 'end', alignItems: 'center' }}>
                        <NavigateBeforeRoundedIcon fontSize="small" sx={{ mr: 1 }}/> previous
                    </Link>
                    <Link underline="hover" color="black" href="/women/tops" variant='body2' sx={{ display: 'flex', px: 2, py: 1, alignItems: 'center' }}>
                            next <NavigateNextIcon fontSize="small" sx={{ ml: 1 }}/>
                    </Link>
                </Box>
                {!isLoading &&
                    <ProductDesktop productItem={productItem} handleClickOpen={handleClickOpen}/>
                }                
            </Box>
            <Box sx={{ display: {xs: 'flex', sm: 'flex', md: 'none'} }}>
                {!isLoading &&
                    <ProductMobile productItem={productItem} handleClickOpen={handleClickOpen}/>
                }   
            </Box>
        </Fragment>
    );
}