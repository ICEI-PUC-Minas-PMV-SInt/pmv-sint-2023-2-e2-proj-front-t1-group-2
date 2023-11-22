import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FaCopyright } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Esqueci from './pages/Esqueci';
import Cadastro from './pages/Cadastro';
import Erro from './pages/Erro';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarraMenu from './pages/BarraMenu';
import React, { useState } from 'react';

function App() {
  const [logado, setLogado] = useState(false);
  
  function login() {
    setLogado(true);
  }

  function logout() {
    setLogado(false);
  }

  function isLogado() {
    return logado;
  }

  return (
    <>

      <Router>
          <BarraMenu logado={isLogado} onLogout={logout} />

          <div>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Login" element={<Login onLogin={login} />} />
              <Route path="/Esqueci" element={<Esqueci />} />
              <Route path="/Cadastro" element={<Cadastro />} />
              <Route path="/Erro" element={<Erro />} />
              <Route path='*' element={<Navigate to="/Erro" />} />
            </Routes>

            <footer className="footer mt-auto py-3 text-center">
              <FaCopyright /> Grupo 2
            </footer>
          </div>
      </Router>
    </>
  );
}

export default App;
