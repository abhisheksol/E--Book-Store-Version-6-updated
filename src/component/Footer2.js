import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import "./footer.css"
const Footer2 = () => {
  return (
    <div style={footer2Style}>
      <div style={contentContainer}>
        <h3 style={headingStyle}>Designed and developed by</h3>
        <p style={authorStyle}>Abhishek Solapure</p>
        <div style={iconContainer}>
          <div className="mobile-icons">
            {/* <a href="https://www.linkedin.com/in/abhishek-solapure-9aa362250/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={iconStyle} color='#fff' /></a>
            <a href="https://www.instagram.com/abhishek.solapure.2003/?igsh=bGJld3lnN2dpenE5" target="_blank" rel="noopener noreferrer"><FaInstagram style={iconStyle} color='#fff' /></a>
            <a href="https://github.com/abhisheksol" target="_blank" rel="noopener noreferrer"><FaGithub style={iconStyle} color='#fff' /></a>
            <a href="https://wa.me/9561435141" target="_blank" rel="noopener noreferrer"><FaWhatsapp style={iconStyle} color='#fff' /></a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const footer2Style = {
  color: '#fff',
  textAlign: 'center',
  padding: '2rem 1rem',
  background: '#333',
};

const contentContainer = {
  maxWidth: '600px',
  margin: '0 auto',
  fontFamily:"t"
};

const headingStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  fontFamily:"t"
};

const authorStyle = {
  fontSize: '1.2rem',
  marginBottom: '2rem',
};

const iconContainer = {
  display: 'flex',
  justifyContent: 'center',
};

const iconStyle = {
  fontSize: '1.5rem',
  margin: '0 0.5rem',
};

export default Footer2;
