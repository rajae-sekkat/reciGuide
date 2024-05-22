// src/components/RecipeList.js
import React from 'react';


const RecipeList = ({ recipes }) => {
    return (
        <div>
            {recipes.map((recipe, index) => (
                <div key={index}>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} alt={recipe.title} />
                    <p>{recipe.instructions}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
