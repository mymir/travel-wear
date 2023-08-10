'use client'

import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface PhotoItem {
    id: number;
    name: string;
    price: number;
    onSale: boolean;
    markdown: number;
    featured: boolean;
    colors: string[];
    primaryUrl: string;    
    secondaryUrl: string;
}

const TermDialog = ({item}: {item: PhotoItem | undefined}) => {
    return (
        <Fragment>
            <DialogContent dividers={true} sx={{ bgcolor: 'common.white'}}>
                <Box 
                    sx={{ 
                        bgcolor: 'background.paper', 
                        height: '70vh',
                        width: '30vw',
                        borderRadius: '80px 10px',
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${item?.primaryUrl})`,
                        ':hover': {
                            backgroundImage: `url(${item?.secondaryUrl})`,
                        }
                    }}
                />
            </DialogContent>        
            <DialogActions sx={{ p: 2, bgcolor: 'common.white', color: 'common.black', borderColor: 'rgba(0, 0, 0, 0.12)', borderStyle: 'solid none none' }}>
            </DialogActions>
        </Fragment>
    );
};

export default TermDialog;