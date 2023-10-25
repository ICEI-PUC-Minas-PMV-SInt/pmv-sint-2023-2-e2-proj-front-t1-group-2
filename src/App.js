import { NavLink, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaSignInAlt, FaSearch, FaCopyright } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Esqueci from './pages/Esqueci';
import Erro from './pages/Erro';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/" className="navbar-brand">Currículos</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/Home" className="nav-link" activeClassName="active"><FaHome /> Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link" activeClassName="active"><FaInfoCircle /> About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Login" className="nav-link" activeClassName="active"><FaSignInAlt /> Login</NavLink>
              </li>
              <li className="nav-item">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2"><FaSearch /></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
         	<Route exact path='/' element={<Home />} />
         	<Route path="/Home" element={<Home />} />
         	<Route path="/About" element={<About />} />
         	<Route path="/Login" element={<Login />} />
         	<Route path="/Esqueci" element={<Esqueci />} />
         	<Route path="/Erro" element={<Erro />} />
				<Route path='*' element={<Navigate to="/Erro"/>}/>
        </Routes>

        <footer className="footer mt-auto py-3 text-center">
          <FaCopyright /> Grupo 2
        </footer>
      </div>
    </Router>
  );
}

export default App;
