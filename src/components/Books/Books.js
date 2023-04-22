import React from 'react';
import SectionLabel from '../SectionLabel'
import { Box } from '@mui/material';
import Book from './Book';
import './Books.scss'

const Books = ({ books }) => {
    return (
        <Box id="Books" sx={{ display:'flex', flexDirection:'column', flexGrow: 1, backgroundColor: 'blue' }}>
            <SectionLabel text="Step Description" />
            {books.map((book, i) => (
                <Book key={i.toString()} book={book} />
            ))}
        </Box>
    );
};

export default Books;