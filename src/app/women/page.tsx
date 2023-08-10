import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import MainDisplay from '../components/MainDisplay';
import Sidebar from '../components/Sidebar';
import SaleBanner from '../components/SaleBanner';
import { womenTops } from '../photos'

export default function Women() {
  const tempArr = womenTops.concat(womenTops).concat(womenTops);

  return (
    <Container maxWidth={false} >
      <Grid container spacing={2} sx={{px:5}}>
        <SaleBanner text="SUMMER SALE" image="https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
        <Sidebar />
        <MainDisplay apparel={tempArr} />
      </Grid>
    </Container>
  )
}