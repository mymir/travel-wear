import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function HeroBackground({backgroundImageUrl}: {backgroundImageUrl: string}) {
    return (
    <Box 
        sx={{ 
            position: 'static',
            zIndex: 1,
            top: 65, 
            right: 0, 
            left: 0, 
            width: '100vw', 
            height: '70vh',
            m: 0
        }}
    >
      <Box
        component="div"
        sx={{
            // position: 'absolute', 
            zIndex: 0,
            width: '100vw', 
            height: '100vh',
            boxShadow: '0px 0px 100px 60px rgb(0 0 0 / 20%) inset',
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundColor: '#6b4c38',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
        }}
      />
      <Typography variant='h2' sx={{ position: 'absolute', top: '40vh', left: '45.5vw', textAlign: 'center', zIndex: 2, fontWeight: 'bold'}}>
        Cool
      </Typography>
      <Button variant='contained' size='large' sx={{ position: 'absolute', top: '50vh', left: '46vw', textAlign: 'center', zIndex: 2, fontWeight: 'bold'}}>
        BUY NOW
      </Button>
    </Box>
    );
};