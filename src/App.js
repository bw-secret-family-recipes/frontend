import React from 'react';
import { Route } from "react-router-dom"

import Nav from './components/Nav';

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
    </main>
  );
}

export default App;

