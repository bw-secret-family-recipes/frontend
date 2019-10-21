import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom"

import Nav from './components/Nav';
import Login from "./components/Login";
import Signup from "./components/Signup";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipeForm";

import { reducer, Context } from "utils";
import Footer from './components/Footer';

function App() {
  const [state, dispatch] = useReducer(reducer);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <main>

        <header className="App-header">
          <Nav />
        </header>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={RecipeList} />
          <PrivateRoute path="/new-recipe" component={NewRecipe} />
          <Redirect from="/login" to="/dashboard" />
        </Switch>

        {/* <Route />// Dashboard /dashboard
        <Route></Route>// Login /login
        <Route></Route>// Signup /signup
        <Route></Route>// NewRecipeForm /create
        <Route></Route>// Edit? */}
      </main>
    </Context.Provider>
  );
}

export default App;

