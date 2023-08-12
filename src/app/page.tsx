import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import MainDisplay from './components/MainDisplay';

import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';

import { menBottoms } from './photos';
import DesktopHeroCarousel from './homepage/DesktopHeroCarousel';
import MobileHeroCarousel from './homepage/MobileHeroCarousel';
import CollectionGrid from './homepage/CollectionGrid';

export default function Home() {
  const backgroundImageUrl3: string = "https://images.unsplash.com/photo-1610481960145-a5e24e5c94fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
  const backgroundImageUrl5: string = "https://images.unsplash.com/photo-1631902112544-2271267abb73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  
  const currentPosts = menBottoms.slice(0, 4);

  return (
    <Grid container spacing={2}>
      <DesktopHeroCarousel/>
      <MobileHeroCarousel/>
      <Grid item xs={12}>
        <Divider sx={{ fontWeight: 'bold', mx: 5, my: 2, fontSize: '20px' }}>
          Looking for something fresh?
        </Divider>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'end',
            height: '80vh',
            width: '100%', 
            backgroundImage: `url(${backgroundImageUrl5})`, 
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            bgcolor: '#ccccd2'
          }}
        >  
          <Typography 
            variant='h2' 
            sx={{
              color: 'white', 
              fontWeight: 'bold',
              my: 5,
              textShadow: '3px 3px black' 
            }}
          >
            NEW
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} >
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'end',
            height: '80vh', 
            width: '100%', 
            backgroundImage: `url(${backgroundImageUrl3})`, 
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            bgcolor: '#ccccd2'
          }}
        >  
          <Typography 
            variant='h2' 
            sx={{
              color: 'white', 
              fontWeight: 'bold',
              my: 5,
              textShadow: '3px 3px black'
            }}
          >
            FEATURED
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ fontWeight: 'bold', mx: 5, my: 2, fontSize: '20px' }}>
          See what's trending
        </Divider>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, width: '100%', pt: 1, justifyContent: 'center' }}>
          <MainDisplay apparel={currentPosts} displayDone={false} spacing={6} />
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }, width: '100%', px: 7, pt: 1, justifyContent: 'center' }}>
          <MainDisplay apparel={currentPosts} displayDone={false} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ fontWeight: 'bold', mx: 5, my: 2, fontSize: '20px' }}>
          Shop our collections
        </Divider>
      </Grid>
      <CollectionGrid/>
      <Grid item xs={12} sm={12} md={4} sx={{ height: '40vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
        <Paper elevation={3} sx={{ py: 10, width: '75%', alignItems: 'center', display: 'flex', flexDirection: 'column', borderRadius: '10px' }}>  
          <LocalShippingRoundedIcon sx={{ fontSize: '50px', mb: 2 }} />
          <Typography variant='body1'>
            Free Standard Shipping
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4} sx={{ height: '40vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ py: 10, width: '75%', alignItems: 'center', display: 'flex', flexDirection: 'column', borderRadius: '10px' }}>  
          <KeyboardReturnRoundedIcon sx={{ fontSize: '50px', mb: 2 }}/>
          <Typography variant='body1'>
            Free Return Within 14 Days
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4} sx={{ height: '40vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ py: 10, width: '75%', alignItems: 'center', display: 'flex', flexDirection: 'column', borderRadius: '10px' }}>  
          <CurrencyExchangeRoundedIcon sx={{ fontSize: '50px', mb: 2 }}/>
          <Typography variant='body1'>
            Pay In Multiple Installments
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}
