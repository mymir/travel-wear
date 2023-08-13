'use client'

import { Fragment } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import Button from '@mui/material/Button';

export default function Footer() {
  return (
    <Fragment>
      <Grid container spacing={2} sx={{wdith: '100vw', height: '50vh', bgcolor: '#fdfdfd', color: 'black', borderBlock: '1px solid rgba(0,0,0,0.2)', py: 2, px: 15}}>
        <Grid item xs={3} sx={{  }}>
          <Typography variant='body1' sx={{ fontWeight: 'bold', mb:3 }}>
            Connect
          </Typography>
          <Typography variant='h4' sx={{ fontWeight: 'bold', mb:3 }}>
            TravelWear
          </Typography>
          <Link variant='body2' sx={{ display: 'flex', alignContent: 'center', textDecoration: 'none', color: 'black', ':hover': { color: 'primary.main' } }}>
            <MailOutlineRoundedIcon sx={{ mr: 1 }} />
            travelwear.email.com
          </Link>
          <Typography variant='body2' sx={{ display: 'flex', alignContent: 'center', textDecoration: 'none', mb: 2, mt: 2 }}>
            <LocalPhoneRoundedIcon sx={{ mr: 1 }} />
            +1 (500) 555-5000 <br/>(M-F 7:00 AM - 9:00 PM EST)
          </Typography>
          <IconButton 
            aria-label='linkedin'
            color="inherit"
            component='a'
            target="_blank"
            rel="noreferrer"
            href='https://www.linkedin.com/in/rafael-mymir-zingle/'
            sx={{ mt: 2, p: 0, ':hover': { color: 'primary.main' } }}              
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton 
            aria-label='github'
            color="inherit"
            component='a'
            target="_blank"
            rel="noreferrer"
            href='https://github.com/mymir/travel-wear/tree/main'
            sx={{ ml: 2, mt: 2, p: 0, ':hover': { color: 'primary.main' } }}              
          >
            <GitHubIcon />
          </IconButton>
        </Grid>


        <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='body1' sx={{ fontWeight: 'bold', mb:3 }}>
            Information
          </Typography>
          <Link variant='body2' sx={{ textDecoration: 'none', mb: 2, color: 'black', ':hover': { color: 'primary.main' } }}>
            About
          </Link>
          <Link variant='body2' sx={{ textDecoration: 'none', mb: 2, color: 'black', ':hover': { color: 'primary.main' } }}>
            FAQ
          </Link>
          <Link variant='body2' sx={{ textDecoration: 'none', mb: 2, color: 'black', ':hover': { color: 'primary.main' } }}>
            Contact us
          </Link>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'column'}}>
          <Typography variant='body1' sx={{ fontWeight: 'bold', mb:3 }}>
            Legal
          </Typography>
          <Link variant='body2' sx={{ textDecoration: 'none', mb: 2, color: 'black', ':hover': { color: 'primary.main' } }}>
            Terms of service
          </Link>
          <Link variant='body2' sx={{ textDecoration: 'none', mb: 2, color: 'black', ':hover': { color: 'primary.main' } }}>
            Privacy policy
          </Link>
          <Link variant='body2' sx={{ textDecoration: 'none', mb: 2, color: 'black', ':hover': { color: 'primary.main' } }}>
            Refund policy
          </Link>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='body1' sx={{ fontWeight: 'bold', mb:3 }}>
            Newsletter
          </Typography>
          <Typography variant='body2' sx={{ textDecoration: 'none', mb: 2 }}>
            Sign up now to get deals delivered straight to your inbox! You can unsubscribe at any time.
          </Typography>
          <Button 
            variant='contained' 
            startIcon={<MailOutlineRoundedIcon/>}
            component='a'
            href='/men/pants'
            disableRipple
            sx={{ 
                color: 'white',
                bgcolor: 'black',
                zIndex: 2, 
                py: 1.5,
                fontWeight: 'bold', 
                borderRadius: '5px',
                ':hover, :active': {
                    bgcolor: 'black',
                }
            }}>Sign Up</Button>
        </Grid>
      </Grid>
      <Box sx={{ display: 'block', width: '100vw', bgcolor: 'background.default', color: 'rgba(0,0,0,0.7)', px: 15}}>
        <Typography variant='body2' sx={{ pt: 2, pb: 4  }} >Copyright © 2023 Travel Wear</Typography>
      </Box>
    </Fragment>
  )
}
