import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>} /> 
      </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  )
}

export default App