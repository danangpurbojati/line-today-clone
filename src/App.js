import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Container style={{backgroundColor: "#fff", paddingTop: 18}} maxWidth="md">
          <Navbar />
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App