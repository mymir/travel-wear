import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ProductList from '../components/ProductList';
import { womenTops } from '../photos'

export default function Brands() {
  return (
    <Container maxWidth={false} sx={{ pt: 2 }} >
      <Typography variant='h4' sx={{wdith: '100vw', textAlign: 'center', fontWeight: 'bold', pb: 2}}>
        Brands
      </Typography>
      <ProductList apparel={womenTops}/>
    </Container>
  )
}