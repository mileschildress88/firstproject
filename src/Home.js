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
      Welcome to my personal website! I built this platform using React, a powerful JavaScript library for creating dynamic user interfaces. To enhance the development experience, I integrated CursorAI, which provided intelligent code suggestions and streamlined the coding process. For backend services, I utilized Firebase to manage data storage, authentication, and to handle hosting and deployment, ensuring a secure, scalable, and accessible platform. To facilitate seamless communication, I implemented EmailJS, enabling direct email interactions without the need for a dedicated server. Additionally, I incorporated Google reCAPTCHA to protect the site from spam and abuse, enhancing overall security. This combination of technologies allowed me to create a responsive, efficient, and user-friendly website that reflects my skills and interests.
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