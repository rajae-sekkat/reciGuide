// Import des modules React nécessaires
import React from 'react';
import './Home.css'; // Import du fichier de styles CSS pour cette page
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

// Composant fonctionnel Home
function Home() {
    let navigate = useNavigate();

    
  return (
    <div className="home-container">
      {/* Barre de navigation */}
      <div className="navbar">
      <div className="logo">
       <img src={logo} alt="" />
      </div>
        <div className="about">
        <ul className="nav-links">
          <li onClick={() => navigate('/home')}>Home</li>
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/explore')}>Explore</li>
          <li onClick={() => navigate('/personalize')}>Personalize</li>
          <li onClick={() => navigate('/CalorieCalculator')}>Compose</li>
          <li onClick={() => navigate('/contact')}>Identify</li>
          
        </ul>
        </div>
        <div className="about">
        <button className="Login-button" onClick={() => navigate('/Login')}>Login</button>
        <button className="Profile-button" onClick={() => navigate('/Profile')}>Profile</button>
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="main-content">
        <div className="slogan">Discover delicious meals</div>
        <p className="description">Find personalized recipes that fit your preferences and lifestyle.</p>
        <div className="about">
        <button className="Login-button" onClick={() => navigate('/explore')}>Explore</button>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
