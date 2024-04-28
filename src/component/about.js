import React from 'react';
import './About.css'; // Import your CSS file for styling
import abhiImage from './abhi2.jpg';
import Footer from './footer';

export default function About() {
  return (
    <div className="about-page">
      <h1 className="about-heading">About Me</h1>
      <div className="about-container">
        <div className="about-image">
          <img src={abhiImage} alt="Abhishek Solapure" />
        </div>
        <div className="about-info" style={{color:'#31473A',fontWeight:'bold'}}>
          <p className="about-text">
            <span className="about-label">Name:</span> Abhishek Solapure
          </p>
          <p className="about-text">
            <span className="about-label">Education:</span> B.Tech
          </p>
          <p className="about-text">
            <span className="about-label">Skills:</span> MERN stack, React Native, Android app development
          </p>
          <p className="about-text">
            <span className="about-label">Experience:</span> Developed a sophisticated bookstore app using Node.js, MongoDB, React, and Redux. Notable features include Multer integration for smooth file uploads and CRUD operations on books, cart management, and genre-based exploration.
          </p>
          <p className="about-text">
            <span className="about-label">Objective:</span> To provide users with a hassle-free journey in exploring and purchasing their favorite reads.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
