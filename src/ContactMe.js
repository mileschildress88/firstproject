import React, { useRef, useState } from 'react'; 
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

function ContactMe({ darkMode }) {
  const form = useRef();
  const captchaRef = useRef(null);
  const [isHuman, setIsHuman] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // Replace with your actual reCAPTCHA site key
  const RECAPTCHA_SITE_KEY = '6LdIBv8qAAAAAEFMTUHMinxwUkfjRSUws4K9W7w7';

  const handleCaptchaChange = (value) => {
    // When CAPTCHA is solved, enable form submission
    setIsHuman(!!value);
  };

  // Validate input fields
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    } else if (formData.message.trim().length > 500) {
      newErrors.message = 'Message cannot exceed 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Get the CAPTCHA response
    const captchaResponse = captchaRef.current.getValue();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    // Check if CAPTCHA is solved
    if (!captchaResponse) {
      alert('Please complete the CAPTCHA');
      return;
    }

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
          // Reset the form and CAPTCHA
          form.current.reset();
          captchaRef.current.reset();
          setIsHuman(false);
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          setErrors({});
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

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

  const inputStyle = (hasError) => ({
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: `1px solid ${hasError ? 'red' : (darkMode ? '#555' : '#ced4da')}`,
    backgroundColor: darkMode ? '#444' : 'white',
    color: darkMode ? '#fff' : '#333'
  });

  const errorStyle = {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '-0.5rem',
    marginBottom: '0.5rem'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: darkMode ? '#61dafb' : '#007bff',
    color: darkMode ? '#333' : 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: isHuman ? 'pointer' : 'not-allowed',
    opacity: isHuman ? 1 : 0.5,
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
          value={formData.name}
          onChange={handleChange}
          style={inputStyle(errors.name)}
        />
        {errors.name && <div style={errorStyle}>{errors.name}</div>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle(errors.email)}
        />
        {errors.email && <div style={errorStyle}>{errors.email}</div>}

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          style={{
            ...inputStyle(errors.message),
            resize: 'vertical'
          }}
        />
        {errors.message && <div style={errorStyle}>{errors.message}</div>}

        {/* Add reCAPTCHA */}
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={handleCaptchaChange}
          theme={darkMode ? 'dark' : 'light'}
        />

        <button
          type="submit"
          style={buttonStyle}
          disabled={!isHuman}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactMe;