// src/components/EditRecipe.js
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const EditRecipe = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await axios.get(`http://localhost:5000/recipes/${id}`);
      setRecipe(response.data);
      setName(response.data.name);
      setIngredients(response.data.ingredients);
      setInstructions(response.data.instructions);
    };
    fetchRecipe();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const updatedRecipe = { name, ingredients, instructions }; // Create an updated recipe object
    await axios.put(`http://localhost:5000/recipes/${id}`, updatedRecipe); // Send PUT request to update the recipe
    history.push(`/recipes/${id}`); // Redirect to the recipe details page after updating
  };

  if (!recipe) return <div>Loading...</div>; // Show loading message while fetching

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
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
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipe;