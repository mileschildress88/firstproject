import React, { useRef } from 'react'; 
import emailjs from '@emailjs/browser';  

function ContactMe({ darkMode }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c6er4j2',     // Your service ID
        'template_lqxwy8o',    // Your template ID
        form.current,
        'ofY-Y48RA-o1404q3'    // Your public key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          // Reset the form
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  // Define styles based on dark mode
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

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: darkMode ? '#333' : '#f8f9fa',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: `1px solid ${darkMode ? '#555' : '#ced4da'}`,
    backgroundColor: darkMode ? '#444' : 'white',
    color: darkMode ? '#fff' : '#333'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: darkMode ? '#61dafb' : '#007bff',
    color: darkMode ? '#333' : 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        Contact Me
      </h1>

      <form ref={form} onSubmit={sendEmail} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          style={{
            ...inputStyle,
            resize: 'vertical'
          }}
        />

        <button
          type="submit"
          style={buttonStyle}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactMe;