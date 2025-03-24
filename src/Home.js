import React from 'react';
import { Link } from 'react-router-dom';

function Home({ darkMode }) {
  const containerStyle = {
    maxWidth: '800px', 
    margin: '0 auto', 
    padding: '20px',
    backgroundColor: darkMode ? '#222' : 'transparent',
    color: darkMode ? '#fff' : '#333'
  };

  const headingStyle = {
    fontSize: '2.5rem', 
    color: darkMode ? '#61dafb' : '#333', 
    marginBottom: '1.5rem'
  };

  const paragraphStyle = {
    fontSize: '1.1rem', 
    lineHeight: '1.6', 
    color: darkMode ? '#e0e0e0' : '#555', 
    marginBottom: '1.5rem'
  };

  const linkStyle = {
    color: darkMode ? '#61dafb' : '#007bff', 
    textDecoration: 'none', 
    fontWeight: '500'
  };

  const buttonStyle = {
    display: 'inline-block',
    background: darkMode ? '#61dafb' : '#007bff',
    color: darkMode ? '#333' : 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: '500',
    marginTop: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        Welcome to My Personal Website
      </h1>

      <p style={paragraphStyle}>
        This site was built with React as the front-end framework, providing a smooth and responsive user experience.
        For version control, I used GitHub to track changes and collaborate on code.
        Cursor's AI-assisted coding features helped me write cleaner, more efficient code.
        The site is hosted on Firebase Hosting, offering reliable and scalable web hosting.
      </p>

      <p style={paragraphStyle}>
        Feel free to check out my <a
          href="https://github.com/mileschildress88"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          GitHub profile
        </a> or connect with me on <a
          href="https://www.linkedin.com/in/jmiles-childress"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          LinkedIn
        </a> to see more of my work.
      </p>

      <Link
        to="/about"
        style={buttonStyle}
      >
        Learn More About Me
      </Link>
    </div>
  );
}

export default Home;