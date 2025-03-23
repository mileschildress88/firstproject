import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HeadShot from './Images/HeadShot.jpg';

function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1.5rem' }}>
        Welcome to My Personal Website
      </h1>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555', marginBottom: '1.5rem' }}>
        This site was built with React as the front-end framework, providing a smooth and responsive user experience.
        For version control, I used GitHub to track changes and collaborate on code.
        Cursor's AI-assisted coding features helped me write cleaner, more efficient code.
        The site is hosted on Firebase Hosting, offering reliable and scalable web hosting.
      </p>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555', marginBottom: '1.5rem' }}>
        Feel free to check out my <a
          href="https://github.com/mileschildress88"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007bff', textDecoration: 'none', fontWeight: '500' }}
        >
          GitHub profile
        </a> or connect with me on <a
          href="https://www.linkedin.com/in/jmiles-childress"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007bff', textDecoration: 'none', fontWeight: '500' }}
        >
          LinkedIn
        </a> to see more of my work.
      </p>

      <Link
        to="/about"
        style={{
          display: 'inline-block',
          background: '#007bff',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: '500',
          marginTop: '1rem',
        }}
      >
        Learn More About Me
      </Link>
    </div>
  );
}

function AboutMe() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1.5rem' }}>
        Miles Childress
      </h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (min-width: 768px)': {
          flexDirection: 'row',
          alignItems: 'flex-start',
        }
      }}>
        <img
          src={HeadShot}
          alt="Profile"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        />

        <div style={{ marginLeft: '0', marginTop: '1rem' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
            As a junior Management Information Systems (MIS) student at Texas A&M University's Mays Business School, I am passionate about using technology to solve real-world business problems. With practical experience ranging from cloud deployment and WordPress hosting on AWS to hands-on team-based competitions, I bring a balanced blend of technical capability and strategic thinking. I've led fitness initiatives as Fitness Chair for Pi Kappa Alpha, supported 250+ members with structured plans, and earned recognition as a CMIS Case Competition finalist, placing 3rd out of 60 teams. My skill set includes AWS Cloud Practitioner certification, programming in Java and C#, database integration with MariaDB, and HTML/WordPress development. I thrive in fast-paced, collaborative environments and am actively seeking internship opportunities in consulting, business technology, and systems analysis to further apply and expand my expertise.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '2.5rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem' }}>
          My Resume
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555', marginBottom: '1.5rem' }}>
          View or download my resume to learn more about my education, skills, and experience.
        </p>

        <a
          href={`https://drive.google.com/uc?export=download&id=1ReCDjgfZy-MOvbsIiKBGgx4PvAvX91I8`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#28a745',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: '500',
            marginRight: '1rem'
          }}
        >
          Download Resume
        </a>

        <a
          href={`https://drive.google.com/file/d/1ReCDjgfZy-MOvbsIiKBGgx4PvAvX91I8/view`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#6c757d',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          View Resume
        </a>
      </div>
    </div>
  );
}

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
          <div style={{ display: 'flex' }}>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/about" style={linkStyle}>
              About Me
            </Link>
          </div>
          <button onClick={toggleDarkMode} style={toggleButtonStyle}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;