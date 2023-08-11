'use client'

import { useState } from 'react';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export const SolidRating = ({startValue}: {startValue: number}) => {
    const [value, setValue] = useState<number | null>(startValue);

    return (
        <Rating
            name="album-rating"
            value={value}
            precision={0.5}
            readOnly={true}
            size='small'
            onChange={(_event, newValue) => {
                setValue(newValue);
            }}
            emptyIcon={<StarIcon style={{ color: '#cacaca' }} fontSize="inherit" />}
        />
    )
}