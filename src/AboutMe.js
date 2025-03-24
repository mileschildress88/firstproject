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
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
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
            As a junior Management Information Systems (MIS) student at Texas A&M University's Mays Business School, I am passionate about using technology to solve real-world business problems. With practical experience ranging from cloud deployment and WordPress hosting on AWS to hands-on team-based competitions, I bring a balanced blend of technical capability and strategic thinking. I've led fitness initiatives as Fitness Chair for Pi Kappa Alpha, supported 250+ members with structured plans, and earned recognition as a CMIS Case Competition finalist, placing 3rd out of 60 teams. My skill set includes AWS Cloud Practitioner certification, programming in Java and C#, database integration with MariaDB, and HTML/WordPress development. I thrive in fast-paced, collaborative environments and am actively seeking internship opportunities in consulting, business technology, and systems analysis to further apply and expand my expertise.
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