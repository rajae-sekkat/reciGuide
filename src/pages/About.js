import React from 'react';
import './About.css'; // Import du fichier de styles CSS pour cette page
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

// Composant fonctionnel About
function About() {
    let navigate = useNavigate();
    return (
        <div>
            {/* Barre de navigation */}
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" />
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
                    <button className="Profile-button">Profile</button>
                </div>
            </div>

            {/* Contenu de la page */}
            <div className="about-container">

                <h1 className="about-text">Dive into Flavo : Uncover the Culinary World with Us</h1>
                
                <p className="about-text">Welcome to Discover Delicious, your ultimate destination to explore a world of flavors. Our platform offers an innovative culinary experience, allowing you to discover, create, and savor an endless variety of meals. With our exploration feature, you can search and uncover new recipes, popular dishes, and unique creations. Furthermore, our meal composition tool enables you to customize your meals by selecting your favorite ingredients, while our calorie counter helps you maintain a balanced diet. At Discover Delicious, we are committed to providing you with an exceptional culinary journey, where every dish is an adventure in itself.</p>

                <h1 className="about-text">Discover our services</h1>

                {/* Services */}
                <div className="services-container">
                    <div className="service-box">
                        <h2>Custom Meal Composition</h2>
                        <p>Create unique meals by selecting your favorite ingredients with our custom meal composition tool.</p>
                    </div>
                    <div className="service-box">
                        <h2>Calorie Tracking</h2>
                        <p>Keep track of your calorie intake and maintain a balanced diet with our calorie tracking feature.</p>
                    </div>
                    <div className="service-box">
                        <h2>Meal Photo Identification</h2>
                        <p>Capture a photo of your meal and let our identification technology instantly provide detailed information about the dishes, ingredients, and nutritional values.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
