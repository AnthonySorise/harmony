import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header'
import Books from './components/Books/Books'
import Map from './components/Map/Map'
import { Container, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gsap } from 'gsap';

const scripture = [
    {name:"Matthew"},
    {name:"Mark"},
    {name:"Luke"},
    {name:"John"},
]

function App() {
  return (
    <>
    <Header></Header>
    <Container id="ContentContainer" sx={{display:"flex", height:'calc(100% - 64px)'}}>
        <Books scripture={scripture}/>
        <Map />
    </Container>
    </>
  );
}

export default App;