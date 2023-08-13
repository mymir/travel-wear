import { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const backgroundImageUrl4: string = "https://images.unsplash.com/photo-1592240819826-e28c55499190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
const backgroundImageUrl7: string = "https://images.unsplash.com/photo-1534310524055-36166a36e6f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80"
const backgroundImageUrl8: string = "https://images.unsplash.com/photo-1578854955076-970394ef2512?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
const backgroundImageUrl9: string = "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
const backgroundImageUrl10: string = "https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
const backgroundImageUrl11: string = "https://images.unsplash.com/photo-1592581844030-5cd35378f633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"

export default function CollectionGrid() {
  return (
    <Fragment>
        <Grid item xs={12} sm={12} md={6}>
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
                  href='/brands'
                  disableRipple
                  sx={{ 
                    color: 'white',
                    bgcolor: 'black',
                    zIndex: 2, 
                    py: 2, 
                    px: 4,
                    fontWeight: 'bold', 
                    borderRadius: '5px',
                    ':hover, :active': {
                        bgcolor: 'black',
                        color: 'primary.contrastText'
                    }
                  }}
                >
                    Shop Brands
                </Button>
            </Box>
          </Box>
        </Grid> 
        <Grid item xs={12} sm={12} md={6} container spacing={2}>
            <Grid item xs={12}>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'end',
                height: '49vh', 
                width: '100%', 
                backgroundImage: `url(${backgroundImageUrl8})`, 
                backgroundPosition: 'left', 
                backgroundSize: '904px', 
                backgroundRepeat: 'no-repeat', 
                bgcolor: '#ccccd2' 
                }}
            >  
                <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center', pb: 5 }}>
                <Button 
                    variant='contained'
                    component='a'
                    href='/men/pants'
                    disableRipple
                    sx={{ 
                        color: 'white',
                        bgcolor: 'black',
                        zIndex: 2, 
                        py: 2, 
                        px: 4,
                        fontWeight: 'bold', 
                        borderRadius: '5px',
                        ':hover, :active': {
                            bgcolor: 'black',
                            color: 'primary.contrastText'
                        }
                    }}
                >
                    Shop Men's Pants
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
                backgroundPosition: '0 -458px', 
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                bgcolor: '#ccccd2' 
                }}
            >  
                <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center', pb: 5 }}>
                <Button 
                    variant='contained' 
                    component='a'
                    href='/women/pants'
                    disableRipple
                    sx={{ 
                        color: 'white',
                        bgcolor: 'black',
                        zIndex: 2, 
                        py: 2, 
                        px: 4,
                        fontWeight: 'bold', 
                        borderRadius: '5px',
                        ':hover, :active': {
                            bgcolor: 'black',
                            color: 'primary.contrastText'
                        }
                    }}
                >
                    Shop Women's Pants
                </Button>
            </Box>
            </Box>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} container spacing={2}>
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
                    href='/women/jackets'
                    disableRipple
                    sx={{ 
                        color: 'white',
                        bgcolor: 'black',
                        zIndex: 2, 
                        py: 2, 
                        px: 4,
                        fontWeight: 'bold', 
                        borderRadius: '5px',
                        ':hover, :active': {
                            bgcolor: 'black',
                            color: 'primary.contrastText'
                        }
                    }}
                >
                    Shop Women's Jackets
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
                backgroundPosition: '-264px -294px', 
                backgroundSize: '1331px', 
                backgroundRepeat: 'no-repeat', 
                bgcolor: '#ccccd2' 
                }}
            >  
                <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center', pb: 5 }}>
                <Button 
                    variant='contained' 
                    component='a'
                    href='/men/shirts'
                    disableRipple
                    sx={{ 
                        color: 'white',
                        bgcolor: 'black',
                        zIndex: 2, 
                        py: 2, 
                        px: 4,
                        fontWeight: 'bold', 
                        borderRadius: '5px',
                        ':hover, :active': {
                            bgcolor: 'black',
                            color: 'primary.contrastText'
                        }
                    }}
                >
                    Shop Men's Shirts
                </Button>
            </Box>
            </Box>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
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
                    href='/men/jackets'
                    disableRipple
                    sx={{ 
                        color: 'white',
                        bgcolor: 'black',
                        zIndex: 2, 
                        py: 2, 
                        px: 4,
                        fontWeight: 'bold', 
                        borderRadius: '5px',
                        ':hover, :active': {
                            bgcolor: 'black',
                            color: 'primary.contrastText'
                        }
                    }}
                >
                    Shop Men's Jackets
                </Button>
            </Box>
            </Box>
        </Grid>
      </Fragment>
  )
}
