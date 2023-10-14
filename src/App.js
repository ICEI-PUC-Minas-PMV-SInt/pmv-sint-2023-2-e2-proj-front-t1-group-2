import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch, FaCopyright } from "react-icons/fa";

function App() {
  const handleSearchClick = () => {
    // Adicione a lógica aqui para lidar com o clique no ícone de pesquisa
    console.log('Ícone de pesquisa clicado!');
  };

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="App-header">
        <Navbar className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <NavLink to="/" className="navbar-brand bg-light fixed-left">Currículos</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto fixed-left">
                <NavLink to="/Home" className="nav-link">Home</NavLink>
                <NavLink to="/About" className="nav-link">About</NavLink>
                <NavLink to="/Login" className="nav-link">Login</NavLink>
              </Nav>
              <Form inline><FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" /><Button variant="outline-success"><FaSearch /></Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </header>

        {/* Body */}
        <div className="container">
          <div className="navbar-nav">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <footer>
          <FaCopyright />
          Grupo 2
        </footer>
      </div>
    </Router>
  );
}

export default App;
