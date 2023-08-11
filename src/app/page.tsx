import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import HeroBackground from './components/HeroBackground';
import MainDisplay from './components/MainDisplay';

import { menBottoms } from './photos';

export default function Home() {
  const backgroundImageUrl1: string = "https://images.unsplash.com/photo-1586396847415-2c76ae7e79fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
  // const backgroundImageUrl2: string = "https://images.unsplash.com/photo-1517438164628-03e454f838f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDZ8NzcwOTk3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  const backgroundImageUrl3: string = "https://images.unsplash.com/photo-1610481960145-a5e24e5c94fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
  const backgroundImageUrl4: string = "https://images.unsplash.com/photo-1592240819826-e28c55499190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
  const backgroundImageUrl5: string = "https://images.unsplash.com/photo-1631902112544-2271267abb73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  // const backgroundImageUrl6: string = "https://images.unsplash.com/photo-1508970707-f6426fb47503?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjJ8NzcwOTk3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  const backgroundImageUrl7: string = "https://images.unsplash.com/photo-1634748076712-4a4f5baf80c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  const backgroundImageUrl8: string = "https://images.unsplash.com/photo-1578854955076-970394ef2512?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  const backgroundImageUrl9: string = "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  const backgroundImageUrl10: string = "https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  const backgroundImageUrl11: string = "https://images.unsplash.com/photo-1592581844030-5cd35378f633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  // const backgroundImageUrl12: string = "https://images.unsplash.com/photo-1534310524055-36166a36e6f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80"
  
  const currentPosts = menBottoms.slice(0, 4);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'start', 
            justifyContent: 'center',
            height: '90vh', 
            width: '100%', 
            backgroundImage: `url(${backgroundImageUrl1})`, 
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
            SUMMER <br/>SALE
          </Typography>
          <Button
              disableRipple            
              component='a'
              variant='contained'
              href='/sale'
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
              <h2>Shop Now</h2>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ fontWeight: 'bold', mx: 15, my: 2, fontSize: '20px' }}>
          Looking for something fresh?
        </Divider>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'end',
            height: '90vh', 
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
      <Grid item xs={6}>
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'end',
            height: '90vh', 
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
        <Divider sx={{ fontWeight: 'bold', mx: 15, my: 2, fontSize: '20px' }}>
          See what's trending
        </Divider>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <MainDisplay apparel={currentPosts} displayDone={false} />
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ fontWeight: 'bold', mx: 15, my: 2, fontSize: '20px' }}>
          Shop our collections
        </Divider>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'end',
            height: '100vh', 
            width: '100%', 
            backgroundImage: `url(${backgroundImageUrl4})`, 
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            bgcolor: '#ccccd2' 
          }}
        >  
          <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center', pb: 5 }}>
              <Button 
                variant='contained' 
                component='a'
                href='/sale'
                color='secondary'
                disableRipple
                sx={{ 
                  zIndex: 2, 
                  px: 4, 
                  fontWeight: 'bold', 
                  borderRadius: '40px',
                  boxShadow: '5px 5px black',
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
                  <h2>Shop Brands</h2>
              </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6} container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'end',
              height: '49vh', 
              width: '100%', 
              backgroundImage: `url(${backgroundImageUrl8})`, 
              backgroundPosition: 'center', 
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat', 
              bgcolor: '#ccccd2' 
            }}
          >  
            <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center', pb: 5 }}>
              <Button 
                variant='contained' 
                component='a'
                href='/sale'
                color='secondary'
                disableRipple
                sx={{ 
                  zIndex: 2, 
                  px: 4, 
                  fontWeight: 'bold', 
                  borderRadius: '40px',
                  boxShadow: '5px 5px black',
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
                  <h3>Men's Pants</h3>
              </Button>
          </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'end',
              height: '49vh', 
              width: '100%', 
              backgroundImage: `url(${backgroundImageUrl11})`, 
              backgroundPosition: 'bottom', 
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat', 
              bgcolor: '#ccccd2' 
            }}
          >  
            <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center', pb: 5 }}>
              <Button 
                variant='contained' 
                component='a'
                href='/sale'
                color='secondary'
                disableRipple
                sx={{ 
                  zIndex: 2, 
                  px: 4, 
                  fontWeight: 'bold', 
                  borderRadius: '40px',
                  boxShadow: '5px 5px black',
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
                  <h3>Women's Jeans</h3>
              </Button>
          </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={6} container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'end',
              height: '49vh', 
              width: '100%', 
              backgroundImage: `url(${backgroundImageUrl9})`, 
              backgroundPosition: 'center', 
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat', 
              bgcolor: '#ccccd2' 
            }}
          >  
            <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center', pb: 5 }}>
              <Button 
                variant='contained' 
                component='a'
                href='/sale'
                color='secondary'
                disableRipple
                sx={{ 
                  zIndex: 2, 
                  px: 4, 
                  fontWeight: 'bold', 
                  borderRadius: '40px',
                  boxShadow: '5px 5px black',
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
                  <h3>Women's Jackets</h3>
              </Button>
          </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'end',
              height: '49vh', 
              width: '100%', 
              backgroundImage: `url(${backgroundImageUrl7})`, 
              backgroundPosition: 'center', 
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat', 
              bgcolor: '#ccccd2' 
            }}
          >  
            <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center', pb: 5 }}>
              <Button 
                variant='contained' 
                component='a'
                href='/sale'
                color='secondary'
                disableRipple
                sx={{ 
                  zIndex: 2, 
                  px: 4, 
                  fontWeight: 'bold', 
                  borderRadius: '40px',
                  boxShadow: '5px 5px black',
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
                  <h3>Men's Shirts</h3>
              </Button>
          </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'end',
            height: '100vh', 
            width: '100%', 
            backgroundImage: `url(${backgroundImageUrl10})`, 
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            bgcolor: '#ccccd2'
          }}
        >
          <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center', pb: 5 }}>
              <Button 
                variant='contained' 
                component='a'
                href='/sale'
                color='secondary'
                disableRipple
                sx={{ 
                  zIndex: 2, 
                  px: 4, 
                  fontWeight: 'bold', 
                  borderRadius: '40px',
                  boxShadow: '5px 5px black',
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
                  <h2>Men's Jackets</h2>
              </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ height: '50vh', width: '100%' }}>  
          BENIFITS
        </Box>
      </Grid>
    </Grid>
  )
}
