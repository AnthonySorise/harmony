// Import necessary libraries and components
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StepButton from './StepButton'
import './Header.scss'

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <StepButton
                    direction="left"
                    onClick={() => console.log('Previous step')}
                >Back</StepButton>

                <Typography variant="h5" component="div" sx={{ margin: 'auto' }}>
                    Harmony of the Gospels
                </Typography>

                <StepButton
                    direction="right"
                    onClick={() => console.log('Next step')}
                >Forward</StepButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;