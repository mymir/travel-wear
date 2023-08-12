import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Banner() {
  return (
    <Box component='a' href='/sale' sx={{display: 'block', width: '100vw', bgcolor: 'secondary.main', color: 'white', textAlign: 'center', textDecoration: 'none'}}>
      <Typography variant='body2' sx={{ py: 0.5 }} >Check out our Summer Sale now! Up to 10% off &rarr;</Typography>
    </Box>
  )
}
