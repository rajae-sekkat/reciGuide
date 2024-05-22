// src/App.js
import React, { useState } from 'react';
import IngredientForm from '../components/IngredientForm';
import RecipeList from '../components/RecipeList';
import { useNavigate } from 'react-router-dom';
import './personalize.css'

function Personalize() {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);

    const searchRecipes = async (ingredients) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=f48e5b59a6d24a49a378f0f24ec6f767`);
        const data = await response.json();
        const detailedRecipes = await Promise.all(
            data.map(async (recipe) => {
                const res = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=f48e5b59a6d24a49a378f0f24ec6f767`);
                return res.json();
            })
        );
        setRecipes(detailedRecipes);
    };

    return (
        <div>
            <h1>Recipe Finder</h1>
            <IngredientForm onSearch={searchRecipes} />
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default Personalize;
