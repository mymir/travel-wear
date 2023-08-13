import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SaleBanner from '../components/SaleBanner';
import { menBottoms } from '../photos'

import ProductList from '../components/ProductList';

export default function Men() {
  const tempArr = menBottoms.concat(menBottoms).concat(menBottoms);

  return (
    <Container maxWidth={false} sx={{ pt: 2 }} >
      <Typography variant='h4' sx={{wdith: '100vw', textAlign: 'center', fontWeight: 'bold', pb: 2}}>
        Men's
      </Typography>
      <SaleBanner text="SUMMER SALE" image="https://images.unsplash.com/photo-1503342083860-88762657bae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
      <ProductList apparel={tempArr}/>
    </Container>
  )
}
