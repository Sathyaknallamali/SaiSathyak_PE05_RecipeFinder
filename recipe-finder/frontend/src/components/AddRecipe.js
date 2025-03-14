// src/components/AddRecipe.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddRecipe = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = { name, ingredients, instructions };
    await axios.post('http://localhost:5000/recipes', newRecipe);
    history.push('/'); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Ingredients:</label>
        <textarea 
          value={ingredients} 
          onChange={(e) => setIngredients(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Instructions:</label>
        <textarea 
          value={instructions} 
          onChange={(e) => setInstructions(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;