import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import "./footer.css"
const Footer = () => {
  return (
    <div className="footerContainer"> 
    <div style={footerStyle}>
      <div className="columnStyle" style={columnStyle}>
        <a href="https://www.linkedin.com/in/abhishek-solapure-9aa362250/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={iconStyle} color='#31473A' /></a>
        {/*  line */}
        <div style={{backgroundColor:'', height:'30px', width:'2px', margin:'0 7px'}}></div>
        <a href="https://www.instagram.com/abhishek.solapure.2003/?igsh=bGJld3lnN2dpenE5" target="_blank" rel="noopener noreferrer"><FaInstagram style={iconStyle} color='#31473A' /></a>
        <div style={{backgroundColor:'', height:'30px', width:'2px', margin:'0 7px'}}></div>


        <a href="https://github.com/abhisheksol" target="_blank" rel="noopener noreferrer"><FaGithub style={iconStyle} color='#31473A' /></a>
        <div style={{backgroundColor:'', height:'30px', width:'2px', margin:'0 7px'}}></div>

        <a href="https://wa.me/9561435141" target="_blank" rel="noopener noreferrer"><FaWhatsapp style={iconStyle} color='green' /></a>
        <div style={{backgroundColor:'#31473A', height:'130px', width:'2px', margin:'0 7px'}}></div>

      </div>
    </div>
    </div>
  );
};

const footerStyle = {
  // background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const iconStyle = {
  height:'30px',
  marginRight: '15px',
};

// Media query for mobile devices


export default Footer;

