'use client'

import { useState, useEffect, useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import Pagination from '@mui/material/Pagination';
import CircleIcon from '@mui/icons-material/Circle';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import ApparelDialog from './ApparelDialog'

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

export default function MainDisplay({apparel}: {apparel: PhotoItem[]}) {
    const [open, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<PhotoItem>();

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleClickOpen = (item: PhotoItem) => {
      setOpen(true);
      setCurrentItem(item);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ref = useRef<null | HTMLDivElement>(null); 

    const [isLoading, setIsLoading] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);

    const numPages = Math.ceil(apparel.length/postsPerPage);

    const lastIndex = currentPage * postsPerPage;
    const firstIndex = lastIndex - postsPerPage;
    const currentPosts = apparel.slice(firstIndex, lastIndex);

    // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    //     setCurrentPage(value);
    //     // console.log('current: ' + currentPage);
    //     // ref.current?.scrollIntoView({ behavior: 'smooth', block: "center" });
    // };

    const nextPage = () => {        
        setPostsPerPage(postsPerPage + 8);
        console.log(postsPerPage);
        setIsLoading(false);
        // ref.current?.scrollIntoView({ behavior: 'smooth', block: "center" });
    };

    const itemRoute = (name: string) => {
        return name.toLowerCase().replaceAll(' ', '-');
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop < (document.documentElement.offsetHeight - 350) || isLoading || postsPerPage >= apparel.length) {
            if(postsPerPage >= apparel.length) {
                setAllLoaded(true);
            }
            return;
        }        
        setIsLoading(true);
        setTimeout(nextPage, 1000);
    };

    const handleClick = () => {
        if (isLoading || postsPerPage >= apparel.length) {
            if(postsPerPage >= apparel.length) {
                setAllLoaded(true);
            }
            return;
        }        
        setIsLoading(true);
        setTimeout(nextPage, 3000);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [isLoading]);
    
    return (
        <Grid container item spacing={2} xs={12} sm={12} md={10}>
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
            <div ref={ref}/>
            {currentPosts.map((item) => 
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                    {item.featured 
                    ?
                    <Box
                        sx={{ 
                            position: 'relative',
                            width: '100%',
                            height: '50vh', 
                            p: 0,
                            m: 0,
                            bgcolor: 'background.paper', 
                            borderRadius: '10px 10px 10px 10px',
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: `url(${item.primaryUrl})`,
                            ':hover': {
                                cursor: 'pointer',
                                backgroundImage: `url(${item.secondaryUrl})`,
                            },
                            ':hover .interaction': {
                                display: 'flex'
                            }
                        }}
                    >
                        <Button
                            component='a'
                            href={`/product/${itemRoute(item.name)}`}
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
                                <IconButton disableRipple sx={{ zIndex: 2, m: 1, bgcolor: 'rgba(255,255,255,0.7)' }}>
                                    <FavoriteBorderRoundedIcon sx={{ position: 'absolute', opacity: 1, ':hover': { opacity: 0 } }} />
                                    <FavoriteRoundedIcon sx={{ color: 'primary.main', position: 'relative', opacity: 0, ':hover': { opacity: 1 } }} />
                                </IconButton>
                            </Box>
                            <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center', pb: 2 }}>
                                <Button onClick={(e) => handleClickOpen(item)} size='large' variant='contained' sx={{ zIndex: 2, px: 2, fontWeight: 'bold', borderRadius: '10px' }}>
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
                                height: '50vh', 
                                p: 0,
                                m: 0,
                                bgcolor: 'background.paper', 
                                borderRadius: '10px 10px 10px 10px',
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundImage: `url(${item.primaryUrl})`,
                                ':hover': {
                                    cursor: 'pointer',
                                    backgroundImage: `url(${item.secondaryUrl})`,
                                },
                                ':hover .interaction': {
                                    display: 'flex'
                                }
                            }}
                        >
                            <Button
                                component='a'
                                href={`/product/${itemRoute(item.name)}`}
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
                                    <IconButton disableRipple sx={{ zIndex: 2, m: 1, bgcolor: 'rgba(255,255,255,0.7)' }}>
                                        <FavoriteBorderRoundedIcon sx={{ position: 'absolute', opacity: 1, ':hover': { opacity: 0 } }} />
                                        <FavoriteRoundedIcon sx={{ color: 'primary.main', position: 'relative', opacity: 0, ':hover': { opacity: 1 } }} />
                                    </IconButton>
                                </Box>
                                <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center', pb: 2 }}>
                                    <Button onClick={(e) => handleClickOpen(item)} size='large' variant='contained' sx={{ zIndex: 2, px: 2, fontWeight: 'bold', borderRadius: '10px' }}>
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
                                ${item.price - (item.price/item.markdown)}
                            </Typography>
                        </Box>
                        : <Typography variant='body2' sx={{ color: 'black' }} >${item.price}</Typography>
                        }
                        {item.colors.map((color, index) =>        
                            <IconButton key={index} disableRipple sx={{ borderRadius: 5, border: 'grey 2px solid', p: 0, mr: 0.5, ':hover': { border: 'black 2px solid' } }}>
                                <CircleIcon sx={{ color: {color}, fontSize: '15px' }} />
                            </IconButton>  
                        )}
                    </Box>
                </Grid>
            )}
            <Toolbar />
            <Grid item xs={12} sx={{ justifyContent: 'end', display: 'flex' }}>
            {/* <Pagination count={numPages} page={currentPage} onChange={nextPage} color="primary" /> */}
            <Box sx={{ bgcolor: 'transparent', width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
            {!allLoaded ?
                    <>
                        {isLoading 
                            ?
                            <CircularProgress size='30px' />
                            :
                            <Button variant='outlined' onClick={handleClick} sx={{width: '140px', height: '61px', borderRadius: '80px'}}>
                                <h4>Load More</h4>
                            </Button>         
                        }   
                    </>
                    :
                    <Button variant='outlined' disabled onClick={handleClick} sx={{width: '140px', height: '61px', borderRadius: '80px'}}>
                        <h4>{apparel.length}/{apparel.length}</h4>
                    </Button>   
            }
            </Box>            
            </Grid>
            <Toolbar />
        </Grid>
    )
}