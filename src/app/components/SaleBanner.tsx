import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function SaleBanner({text, image}: {text: string, image: string}) {
  return (
        <Grid item xs={12}>
          <Box 
            sx={{ 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'baseline',
                display: 'flex',
                zIndex: 0,
                bgcolor: 'background.paper', 
                height: '40vh', 
                borderRadius: '80px 20px', 
                border: '1px solid white',
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`
            }}
          >
            <Typography 
                variant='h2' 
                sx={{ 
                    display: {xs: 'none', sm: 'none', md: 'flex'}, 
                    position: 'static', 
                    fontWeight: 'bold', 
                    ml: 10, 
                    color: 'primary.main' 
                }}
            >
                {text}
            </Typography>
                <Button 
                    disableRipple            
                    component='a'
                    variant='contained'
                    href='/sale'
                    sx={{
                        borderRadius: '80px',
                        position: 'static', 
                        fontWeight: 'bold', 
                        ml: 10, 
                        px: 4
                    }}
                >
                    <h2>Shop Now</h2>
                </Button>
          </Box>
        </Grid>
  )
}
