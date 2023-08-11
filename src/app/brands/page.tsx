import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MainDisplay from '../components/MainDisplay';
import Sidebar from '../components/Sidebar';
import { womenTops } from '../photos'

export default function Brands() {
  return (
    <Container maxWidth={false} sx={{ pt: 2 }} >
      <Typography variant='h4' sx={{wdith: '100vw', textAlign: 'center', fontWeight: 'bold', pb: 2}}>
        Brands
      </Typography>
      <Grid container spacing={2} sx={{px:5}}>
        <Sidebar />
        <MainDisplay apparel={womenTops} />
      </Grid>
    </Container>
  )
}