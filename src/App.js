import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';

function App() {
  const [isRotatingRight, setIsRotatingRight] = useState(true);
  const [rotationDegrees, setRotationDegrees] = useState(0);

  const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

  const onButtonClick = () => {
    setIsRotatingRight(!isRotatingRight);
  };

  useEffect(() => {
    const rotationTween = gsap.to('#logo', {
        duration: 2,
        rotation: isRotatingRight ? `+=360` : `-=360`,
        repeat: -1,
        ease: "none",
        onComplete: () => {
          setRotationDegrees(isRotatingRight ? rotationDegrees + 360 : rotationDegrees - 360);
        },
      });
  
    return () => {
      rotationTween.kill();
    };
  }, [isRotatingRight, rotationDegrees]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          id="logo"
          alt="logo"
        />
        <div>
          <StyledButton onClick={onButtonClick}>Change Rotation!</StyledButton>
        </div>
      </header>
    </div>
  );
}

export default App;