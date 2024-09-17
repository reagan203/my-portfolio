import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import FrontendProjects from './components/FrontendProjects';
import CProjects from './components/CProjects';
// import BackendProjects from './components/BackendProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './App.css'; // Your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'container-fluid dark-mode vh-100 p-0' : 'container-fluid vh-100 p-0'}>
        {/* Fullscreen Navigation Bar */}
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} mb-0`}>
          <div className="container">
            <Link className="navbar-brand mx-auto" to="/">My Portfolio</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">Projects</Link>
                </li>
              </ul>
              <button className="btn btn-outline-light ml-3" onClick={toggleDarkMode}>
                {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
                {darkMode ? ' Light Mode' : ' Dark Mode'}
              </button>
            </div>
          </div>
        </nav>

        {/* Fullscreen Content */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/frontend" element={<FrontendProjects />} />
            <Route path="/projects/c-projects" element={<CProjects />} />
            {/* <Route path="/projects/backend" element={<BackendProjects />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
