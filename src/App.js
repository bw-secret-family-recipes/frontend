import React from 'react';
import { Route } from "react-router-dom"

import Nav from './components/Nav';
import Footer from './components/Footer';
import RecipeCard from './components/RecipeCard';

function App() {
  return (
    <main>
    
      <header className="App-header">
        <Nav />
      </header>
    
      <Route></Route>// Dashboard /dashboard
      <Route></Route>// Login /login
      <Route></Route>// Signup /signup
      <Route></Route>// NewRecipeForm /create
      <Route></Route>// Edit?
      <RecipeCard/>
      <footer>
        <Footer/>
      </footer>
    </main>
  );
}

export default App;

