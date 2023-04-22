import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const StepButton = ({ direction, onClick, disabled, children }) => {
    const isRightDirection = direction === 'right';

    return (
        <Button
            sx={{ width: '132px' }}
            variant="contained"
            onClick={onClick}
            disabled={disabled}
            startIcon={isRightDirection ? null : <ArrowBackRoundedIcon />}
            endIcon={isRightDirection ? <ArrowForwardRoundedIcon /> : null}
        >
            {children}
        </Button>
    );
};

export default StepButton;