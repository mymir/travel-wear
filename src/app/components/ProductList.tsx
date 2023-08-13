'use client'

import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';

import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import MainDisplay from './MainDisplay';
import Sidebar from './Sidebar';

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

export default function ProductList({apparel}:{apparel: PhotoItem[]}) {
  const [isLoading, setIsLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const numPages = Math.ceil(apparel.length/postsPerPage);

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = apparel.slice(firstIndex, lastIndex);

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

const nextPage = () => {        
  setPostsPerPage(postsPerPage + 8);
  console.log(postsPerPage);
  setIsLoading(false);
};


useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <Box sx={{ pt: 2, px: 0 }} >
      <Grid container spacing={2}>
        <Sidebar />
        <MainDisplay apparel={currentPosts}/>
      </Grid>
      <Toolbar />
        <Grid item xs={12} sx={{ justifyContent: 'end', display: 'flex' }}>
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
                <>
                        <Button variant='outlined' disabled onClick={handleClick} sx={{ width: '140px', height: '61px', borderRadius: '80px'}}>
                            <h4>{apparel.length}/{apparel.length}</h4>
                        </Button> 
                </>
        }
        </Box>            
        </Grid>   
        <Toolbar />
    </Box>
  )
}