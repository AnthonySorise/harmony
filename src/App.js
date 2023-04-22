import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header'
import Books from './components/Books/Books'
import Map from './components/Map/Map'
import { Container, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';

const books = [
    { name: "Matthew" },
    { name: "Mark" },
    { name: "Luke" },
    { name: "John" },
]
const maxSteps = 50;//DO DO - remove and reference steps generated from API

function App() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        console.log(`Current step is: ${step}`);
      }, [step]);

    const incrementStep = ()=>{
        const incrementedSteps = step+1;
        setStep(incrementedSteps <= maxSteps ? incrementedSteps : maxSteps);
    }
    const decrementStep = ()=>{
        const decrementedStep = step-1;
        setStep(decrementedStep > -1 ? decrementedStep : 0);
    }

    return (
        <>
            <Header incrementStep={incrementStep} decrementStep={decrementStep} step={step} maxSteps={maxSteps} />
            <Container id="ContentContainer" sx={{ display: "flex", height: 'calc(100% - 64px)' }}>
                <Books books={books} />
                <Map />
            </Container>
        </>
    );
}

export default App;