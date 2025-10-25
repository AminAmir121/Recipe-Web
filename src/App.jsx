import React from 'react'
import './App.css'
import Container from './components/Container'
import Header from './components/Header'
import Pics from './components/Pics'
import Text from './components/Text'
import After from './components/After'
import { Outlet } from 'react-router-dom'


function App() {

 

  return (
    <Container>
       <Header /> 
      <Outlet></Outlet>
    </Container>
  );
}

export default App