// Import necessary libraries and components
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StepButton from './StepButton'
import './Header.scss'

const Header = ({incrementStep, decrementStep, step, maxSteps}) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <StepButton
                    direction="left"
                    onClick={decrementStep}
                    disabled={step == 0}
                >Back</StepButton>

                <Typography variant="h5" component="div" sx={{ margin: 'auto' }}>
                    Harmony of the Gospels
                </Typography>

                <StepButton
                    direction="right"
                    onClick={incrementStep}
                    disabled={step >= maxSteps}
                >Forward</StepButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;