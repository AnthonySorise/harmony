// Import necessary libraries and components
import React from 'react';
import { Box } from '@mui/material';

const SectionLabel = ({ text }) => {
    return (
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            height: '36px',
            backgroundColor: 'teal',}}>
            <Box sx={{
                width: '100%',
                textAlign: 'center',
                overflow: 'hidden',
                maxHeight: '27px',
                fontSize: '20px',
                fontWeight: 'bold',
            }}>

                {text}
            </Box>
        </Box>
    );
};

export default SectionLabel;