import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Divider, Typography } from '@mui/material';

export default function Summary({total}:{total: number}) {
  return (  
    <Grid item xs={4}>
      <Box sx={{ border: '1px solid rgba(0,0,0,0.3)', p: 4, mt: 4, position: 'sticky', top: '12vh' }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 2 }}>Order Summary:</Typography>
        <Divider/>
        <Typography sx={{ fontWeight: 'bold', my: 2 }}>Subtotal: ${total}</Typography>
        <Typography sx={{ fontWeight: 'bold', my: 2 }}>Shipping: TBD</Typography>
        <Typography sx={{ fontWeight: 'bold', my: 2 }}>Tax: $0</Typography>
        <Divider/>
        <Typography sx={{ fontWeight: 'bold', my: 2 }}>Estimated total: ${total}</Typography>
        <Button 
          variant='contained' 
          disableRipple 
          sx={{ 
            width: '100%', 
            fontWeight: 'bold', 
            py: 1.5, 
            mt: 2, 
            color: 'white', 
            bgcolor: 'black', 
            ":hover, :active": { bgcolor: 'black' } 
          }}
        >
          Proceed To Checkout
        </Button>
        <Button 
          variant='outlined' 
          disableRipple 
          sx={{ 
            width: '100%', 
            fontWeight: 'bold', 
            py: 1.5, 
            mt: 1, 
            color: 'black', 
            borderColor: 'black', 
            bgcolor: 'transparent',
            ":hover, :active": { borderColor: 'black', bgcolor: 'transparent', } 
          }}
        >
          Paypal
        </Button>
      </Box>
    </Grid>
  )
}
