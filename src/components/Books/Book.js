import React from 'react';
import { Box } from '@mui/material';
import './Books.scss'

const Book = ({book}) => {
    return (
        <Box id="Book" sx={{ flexGrow:1, backgroundColor:'blue'}}>
            {book.name}
        </Box>
    );
};

export default Book;