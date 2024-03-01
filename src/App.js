import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import './App.css';
import { Routes,Route } from 'react-router-dom';


function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/products" element={<Products/>} />
        <Route  path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
