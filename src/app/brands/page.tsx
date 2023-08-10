import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import MainDisplay from '../components/MainDisplay';
import Sidebar from '../components/Sidebar';
import { womenTops } from '../photos'

export default function Brands() {
  return (
    <Container maxWidth={false} >
      <Grid container spacing={2} sx={{px:5}}>
        <Sidebar />
        <MainDisplay apparel={womenTops} />
      </Grid>
    </Container>
  )
}