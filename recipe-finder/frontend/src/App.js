// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import RecipeDetails from './components/RecipeDetails';
import EditRecipe from './components/EditRecipe';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Finder</h1>
        <Switch>
          <Route path="/" exact component={RecipeList} />
          <Route path="/add" component={AddRecipe} />
          <Route path="/recipes/:id" component={RecipeDetails} />
          <Route path="/edit/:id" component={EditRecipe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;