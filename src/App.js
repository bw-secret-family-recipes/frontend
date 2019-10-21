import React, { useReducer } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"

import Nav from './components/Nav';
import Login from "./components/Login";
import Signup from "./components/Signup";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipeForm";

import { Context, reducer, axiosAuth, PrivateRoute } from "./utils";
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

      </main>
    </Context.Provider>
  );
}

export default App;

