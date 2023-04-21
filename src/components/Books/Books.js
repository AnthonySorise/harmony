import React from 'react';
import SectionLabel from '../SectionLabel'
import { Box } from '@mui/material';
import './Books.scss'

const Books = () => {
    return (
        <Box id="Books" sx={{ flexGrow:1, backgroundColor:'blue'}}>
            <SectionLabel text="Step Description"/>
        </Box>
    );
};

export default Books;