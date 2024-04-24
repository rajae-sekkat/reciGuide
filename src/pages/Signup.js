import React, { useState } from 'react';
import './Login.css'; // Import du fichier de styles CSS pour cette page
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

// Composant fonctionnel Login
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Gérer la soumission du formulaire ici
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Naviguer vers la page de sign up
  };

  return (
    <div className="login-container">
      {/* Barre de navigation */}
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo de votre application" />
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
          <button className="Login-button"  onClick={() => navigate('/Login')}>Login</button>
          <button className="Profile-button">Profile</button>
        </div>
      </div>
      
      {/* Formulaire de connexion */}
      <div className="login-form">
        <div className="login-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
