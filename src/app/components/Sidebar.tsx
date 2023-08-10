'use client'
import * as React from 'react';
import { usePathname } from 'next/navigation'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import FilterAccordian from './FilterAccordian';
import { filters } from '../filters';
import { categories } from '../links';

export default function Sidebar() {
    const pathname = usePathname()
    const title = pathname.split('/')[1];

    return (
        <Grid item xs={0} sm={0} md={2} sx={{  display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <Box sx={{ position: 'sticky', top: '5rem', display: 'block' }}>
                <Typography variant='body1' sx={{ ml: 2, mt: 2, fontWeight: 'bold', textTransform: 'capitalize' }}>
                    {title}
                </Typography>
                {categories.map((item) => (
                    <Link                     
                        key={item.id} 
                        aria-label={item.label}               
                        component='a' 
                        href={pathname + item.route}
                        variant='body2'
                        sx={{ 
                            width: '100%',
                            display: 'block',
                            textDecoration: 'none',
                            color: 'black', 
                            mx: 2,
                            my: 1,
                            ':hover': {
                                color: 'primary.main',
                            }
                        }}
                    >
                        {item.label}
                    </Link>
                ))

                }
                <Toolbar />
                <Typography variant='body1' sx={{ pl: 2, py: 2, fontWeight: 'bold' }}>Filters:</Typography>
                <FilterAccordian filterItems={filters} />
            </Box>
        </Grid>
    );
}