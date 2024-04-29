import React, { useState } from 'react';
import './Login.css'; // Import du fichier de styles CSS pour cette page
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

// Composant fonctionnel Profile
function Profile() {
  const [email, setEmail] = useState('');
  const [hatedFood, setHatedFood] = useState('');
  const [likedFood, setLikedFood] = useState('');
  const [weight, setWeight] = useState('');
  const [weightPreference, setWeightPreference] = useState('');
  const [location, setLocation] = useState('');

  const handleSaveProfile = () => {
    // Effectuer ici la logique d'enregistrement des informations dans votre base de données
    console.log('Profile saved successfully!');
  };
  let navigate = useNavigate();

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
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/explore')}>Explore</li>
          <li onClick={() => navigate('/personalize')}>Personalize</li>
          <li onClick={() => navigate('/contact')}>Contact</li>
        </ul>
        </div>
        <div className="about">
        <button className="Login-button" onClick={() => navigate('/Login')}>Login</button>
        </div>
      </div>
      
      {/* Formulaire de profil */}
      <div className="login-form">
        <div className="login-box">
          <h2>Profile</h2>
          <form>
            <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            </div>
            <input
              type="text"
              value={hatedFood}
              onChange={(e) => setHatedFood(e.target.value)}
              placeholder="Hated Food"
              required
            />
            <input
              type="text"
              value={likedFood}
              onChange={(e) => setLikedFood(e.target.value)}
              placeholder="Liked Food"
              required
            />
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight"
              required
            />
            <input
              type="text"
              value={weightPreference}
              onChange={(e) => setWeightPreference(e.target.value)}
              placeholder="Weight Preference (increase/decrease)"
              required
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              required
            />
            <button type="button" onClick={handleSaveProfile}>Save Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
