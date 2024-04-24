// Import des modules React nécessaires
import React from 'react';
import './About.css'; // Import du fichier de styles CSS pour cette page
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

// Composant fonctionnel Home
function About() {
    let navigate = useNavigate();
  return (
    <div className="about-container">
      {/* Barre de navigation */}
      <div className="navbar">
      <div className="logo">
       <img src={logo} alt="" />
      </div>
        <div className="about">
        <ul className="nav-links">
          <li onClick={() => navigate('/home')}>Home</li>
          <li onClick={() => navigate('/explore')}>Explore</li>
          <li onClick={() => navigate('/personalize')}>Personalize</li>
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/contact')}>Contact</li>
        </ul>
        </div>
        <div className="about">
        <button className="Login-button" onClick={() => navigate('/Login')}>Login</button>
        <button className="Profile-button">Profile</button>
        </div>
      </div>
      
    
    </div>
    
  );
}

export default About;
