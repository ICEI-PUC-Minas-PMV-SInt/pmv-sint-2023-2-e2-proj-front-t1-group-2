import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, NavLink, Route, Routes, Form } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript and Popper.js
import { FaSearch, FaCopyright } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <NavLink to="/" className="navbar-brand bg-light fixed-left">Currículos</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <NavLink to="/Home" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>

                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      <FaSearch />
                    </span>

                  </div>
                </div>
              </div>

            </div>
          </nav>
        </header>
        <body>
          <div className="navbar-nav">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </div>
        </body>
      </div>
      <footer> <FaCopyright />
        Grupo 2
      </footer>

    </Router>

  );
}

export default App;
