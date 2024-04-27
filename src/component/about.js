import React from 'react';
import './About.css'; // Import your CSS file for styling
import abhiImage from './abhi1.png';
import Footer from './footer';

export default function About() {
  return (
    <div style={{ backgroundColor: 'rgb(221,208,200)' }}>
      <h1 style={{ color: 'rgb(249,115,22)' }}>About Me</h1>
      <div className="about-container" style={{ backgroundColor: 'rgb(221,208,200)' }}>


        <div className="about-image" style={{}}>
          <img src={abhiImage} alt="Abhishek Solapure" />
        </div>
        <div className="about-info">
        <p style={{ color: 'black' }}>
            Abhishek Solapure, a B.Tech student, proficient in MERN stack, React Native, and Android app development.
          </p >
          <p style={{ color: 'black' }}>
            Developed a sophisticated bookstore app using Node.js, MongoDB, React, and Redux, ensuring a seamless user experience.    
                    Notable features include Multer integration for smooth file uploads and CRUD operations on books, cart management, and genre-based exploration.

          </p>
         
          <p style={{ color: 'black' }}>
            The application offers a curated selection of books, aiming to provide users with a hassle-free journey in exploring and purchasing their favorite reads.
          </p>
        </div>
        {/* <div style={{ height: '600px' }}></div> */}
      </div>
      <Footer/>
    </div>
  );
}
