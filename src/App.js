import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import { FaCopyright } from "react-icons/fa";
import BarraMenu from './pages/BarraMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BarraMenu />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <FaCopyright />Grupo 2
      </footer>
    </div>
  );
}

export default App;
