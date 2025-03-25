import React from 'react';
import HeadShot from './Images/HeadShot.jpg';

function AboutMe({ darkMode }) {
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

  const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'flex-start',
    }
  };

  const imageStyle = {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center 25%', //used this to make it to where my head isnt being chopped off lol
    marginBottom: '1.5rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const textStyle = {
    fontSize: '1.1rem', 
    lineHeight: '1.6', 
    color: darkMode ? '#e0e0e0' : '#555',
    marginLeft: '0', 
    marginTop: '1rem'
  };

  const sectionStyle = {
    marginTop: '2.5rem', 
    borderTop: `1px solid ${darkMode ? '#444' : '#eee'}`, 
    paddingTop: '2rem'
  };

  const resumeHeadingStyle = {
    fontSize: '1.8rem', 
    color: darkMode ? '#61dafb' : '#333', 
    marginBottom: '1rem'
  };

  const resumeTextStyle = {
    fontSize: '1.1rem', 
    lineHeight: '1.6', 
    color: darkMode ? '#e0e0e0' : '#555', 
    marginBottom: '1.5rem'
  };

  const buttonStyle = (color) => ({
    display: 'inline-block',
    background: darkMode ? '#61dafb' : color,
    color: darkMode ? '#333' : 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: '500',
    marginRight: '1rem'
  });

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        Miles Childress
      </h1>

      <div style={imageContainerStyle}>
        <img
          src={HeadShot}
          alt="Profile"
          style={imageStyle}
        />

        <div style={{ marginLeft: '0', marginTop: '1rem' }}>
          <p style={textStyle}>
          Junior Management Information Systems student at Texas A&M University with a strong foundation in cloud technologies, web development, and systems analysis. Developed and deployed a personal portfolio website using React, Firebase (for hosting and backend services), EmailJS, Google reCAPTCHA, and CursorAI, demonstrating both technical ability and attention to user experience. Experienced in managing secure web infrastructure, collaborating across teams, and delivering results under pressure. Known for adaptability, strong problem-solving skills, and a commitment to continuous improvement. Currently seeking internship opportunities in business technology, consulting, or systems implementation to further apply and grow technical and strategic capabilities.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={resumeHeadingStyle}>
          My Resume
        </h2>
        <p style={resumeTextStyle}>
          View or download my resume to learn more about my education, skills, and experience.
        </p>

        <a
          href={`https://drive.google.com/uc?export=download&id=1ReCDjgfZy-MOvbsIiKBGgx4PvAvX91I8`}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle('#28a745')}
        >
          Download Resume
        </a>

        <a
          href={`https://drive.google.com/file/d/1ReCDjgfZy-MOvbsIiKBGgx4PvAvX91I8/view`}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle('#6c757d')}
        >
          View Resume
        </a>
      </div>
    </div>
  );
}

export default AboutMe;