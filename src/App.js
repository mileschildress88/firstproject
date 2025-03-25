import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';  // Import the new Home component
import AboutMe from './AboutMe';  // Import the new AboutMe component
import ContactMe from './ContactMe';  // Import the ContactMe component
import LogoImage from './Images/LogoImage.png';  // Import your logo image

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Define navbar styles based on dark mode
  const navbarStyle = {
    background: darkMode ? '#333' : '#f8f9fa',
    padding: '1rem',
    marginBottom: '2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: darkMode ? '#fff' : '#333'
  };

  // Define logo styles
  const logoStyle = {
    height: '50px',  // Adjust height as needed
    marginRight: '20px',  // Add some space between logo and links
  };

  // Define link styles based on dark mode
  const linkStyle = {
    margin: '0 10px', 
    textDecoration: 'none', 
    color: darkMode ? '#61dafb' : '#007bff', 
    fontWeight: '500'
  };

  // Define toggle button style based on dark mode
  const toggleButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: darkMode ? '#61dafb' : '#007bff'
  };

  return (
    <BrowserRouter>
      <div className="App" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <nav style={navbarStyle}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Add Logo */}
            <Link to="/">
              <img 
                src={LogoImage} 
                alt="Logo" 
                style={logoStyle} 
              />
            </Link>
            
            {/* Navigation Links */}
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/about" style={linkStyle}>
              About Me
            </Link>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </div>
          <button onClick={toggleDarkMode} style={toggleButtonStyle}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<AboutMe darkMode={darkMode} />} />
          <Route path="/contact" element={<ContactMe darkMode={darkMode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;