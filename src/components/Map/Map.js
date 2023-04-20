import React, { useState, useEffect, useRef } from 'react';
import { Box, Button } from '@mui/material';
import { gsap, Power4 } from 'gsap';
import './Map.scss';
import { styled } from '@mui/material/styles';

const RotatedButton = styled(Button)`
  transform: rotate(-90deg) translateX(50%) translateY(4px);
  transform-origin: bottom;
  writing-mode: vertical-lr;
  max-height: 36.5px;
  top: 50%;
`;

const MapButton = React.forwardRef((props, ref) => {
    return (
        <RotatedButton {...props} ref={ref}>
            Map
        </RotatedButton>
    );
});

const Map = () => {
    const [isOpen, setIsOpen] = useState(false);
    const mapRef = useRef(null);
    const buttonRef = useRef(null);
    const mapWidth = 400;

    const toggleMap = () => {
        const width = isOpen ? mapWidth : 0;
        gsap.to(mapRef.current, { width: width, duration: 0.5, ease: Power4.easeInOut });

        if (buttonRef.current) {
            const right = isOpen ? 0 : buttonRef.current.clientHeight;
            gsap.to(buttonRef.current, { right: right, duration: 0.5, ease: Power4.easeInOut });
        }

        setIsOpen(!isOpen);
    };

    return (
        <Box id="Map" ref={mapRef} sx={{ width: mapWidth + `px`, height: '100%', backgroundColor: 'red' }}>
            <MapButton ref={buttonRef} variant='contained' onClick={toggleMap}>Close Map</MapButton>
        </Box>
    );
};

export default Map;