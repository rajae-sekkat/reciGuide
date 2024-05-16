import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import './RecipeDetails.css'; // Assurez-vous d'importer le fichier CSS ici

function RecipeDetails() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const apiKey = "f48e5b59a6d24a49a378f0f24ec6f767";
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
      try {
        const response = await axios.get(url);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    
    <div className="recipe-details-container">
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
        </div>
      <h2 className="recipe-title">{recipe.title}</h2>
      <img className="recipe-image" src={recipe.image} alt={recipe.title} />
      <h3>Ingredients:</h3>
      <ul className="ingredients-list">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      {/* Ajoutez d'autres détails de la recette ici */}
    </div>
  );
}

export default RecipeDetails;
