'use client'

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/navigation'

import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export default function LoginForm() {
    const [open, setOpen] = useState(false);
    const router = useRouter()

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleSubmit = () => {
        setOpen(true);
    }

    const handleClose = () => {
        router.push('/');
    }

    return (
        <Grid container spacing={2} sx={{ px: 5, pb: 5 }}>
            <Dialog                
                open={open}
                onClose={handleClose}
                fullScreen={fullScreen}
                fullWidth={true}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"  
                sx={{ maxwidth: '800px'}}    
            >
                <DialogContent sx={{ pt: 15 }}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                        Welcome Back!
                    </Typography>                    
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'center', pb: 15 }}>
                    <Button color="secondary" onClick={handleClose} variant='contained' sx={{ fontWeight: 'bold', p: 2 }}>
                        Start Browsing
                    </Button>                
                </DialogActions>
            </Dialog>
            <Grid item xs={12} sx={{ mt: 2 }} >
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                    Email:
                </Typography>
                <TextField fullWidth type='email' color="secondary" id="email-input" variant="outlined" />
            </Grid>
            <Grid item xs={12} >
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                    Password:
                </Typography>
                <TextField fullWidth type='password' color="secondary" id="password-input" variant="outlined" />
            </Grid>
            <Grid item container spacing={2} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} sm={12} md={6}>
                    <FormControlLabel control={<Checkbox color="secondary" id="remember-me" sx={{ color: 'black' }} />} label="Remember me" sx={{ display: 'flex', flexGrow: 1 }} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Link color="secondary">
                        Forgot your password?
                    </Link>
                </Grid>
            </Grid>
            <Grid item xs={12} >
                <Button color="secondary" onClick={handleSubmit} fullWidth variant='contained' sx={{ fontWeight: 'bold', p: 2 }}>
                    Sign In
                </Button>
            </Grid>
            <Grid item xs={12} >
                <Typography variant='h5' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Or Sign In With...
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} >
                <Button color="secondary" onClick={handleSubmit} fullWidth variant='outlined' startIcon={<GoogleIcon />} sx={{ fontWeight: 'bold', p: 2 }}>
                    Google
                </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={4} >
                <Button color="secondary" onClick={handleSubmit} fullWidth variant='outlined' startIcon={<AppleIcon />} sx={{ fontWeight: 'bold', p: 2 }}>
                    Apple
                </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={4} >
                <Button color="secondary" onClick={handleSubmit} fullWidth variant='outlined' startIcon={<FacebookRoundedIcon />} sx={{ fontWeight: 'bold', p: 2 }}>
                    Facebook
                </Button>
            </Grid>
        </Grid>
    )
}
