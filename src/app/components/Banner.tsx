import Box from '@mui/material/Box';

export default function Banner() {
  return (
    <Box component='a' href='/sale' sx={{display: 'block', width: '100vw', bgcolor: 'secondary.main', color: 'white', textAlign: 'center', textDecoration: 'none'}}>
      <h5>Check out our Summer Sale now! Up to 10% off &rarr;</h5>
    </Box>
  )
}
