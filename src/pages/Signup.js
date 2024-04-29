import React, { useState } from 'react';
import './Login.css'; // Import du fichier de styles CSS pour cette page
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth"; // Importer directement la fonction createUserWithEmailAndPassword
import { auth } from '../firebase'; // Importez auth depuis le fichier firebase

// Composant fonctionnel Signup
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => { 
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Utiliser createUserWithEmailAndPassword de firebase/auth avec l'objet auth
      navigate('/Login'); // Rediriger l'utilisateur vers la page d'accueil après l'inscription réussie
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="login-container">
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
      
      {/* Formulaire d'inscription */}
      <div className="login-form">
        <div className="login-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}> {/* Utiliser handleSubmit pour soumettre le formulaire */}
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
            <button type="submit">Sign Up</button> {/* Assurez-vous que le bouton est de type 'submit' */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
