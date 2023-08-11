'use client'
import { usePathname } from 'next/navigation'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import  { navLinks } from '../links'

export default function NavLinks() {
    const pathname = usePathname()

    return (
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navLinks.map((item) => {

                if(item.route === pathname ) {
                    return (
                    <Button 
                    key={item.id} 
                    aria-label={item.label}               
                    component='a' 
                    href={item.route}
                    disableRipple
                    sx={{ 
                    color: '#ffeb87', 
                    mx:2,
                    fontWeight: 'bold',
                    textDecoration: 'white underline 2px',
                    textUnderlineOffset: '1.6rem',
                    textDecorationSkipInk: 'none',
                    ':hover': {
                        color: 'white',
                        textDecoration: 'white underline 2px',
                        textUnderlineOffset: '1.6rem',
                        textDecorationSkipInk: 'none',
                    }
                    }} 
                    >
                    {item.label}
                    </Button>
                    )
                } else {
                    return (
                        <Button 
                        key={item.id} 
                        aria-label={item.label}               
                        component='a' 
                        href={item.route}
                        disableRipple
                        sx={{ 
                        color: '#ffeb87', 
                        mx:2,
                        fontWeight: 'bold',
                        ':hover': {
                            color: 'white'
                        }
                        }} 
                        >
                        {item.label}
                        </Button>
                    )
                }
            })}
          </Box>
    );
};