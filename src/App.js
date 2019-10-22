import React, { useReducer } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"

import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import NewRecipe from "./components/NewRecipeForm";
import LoginWrapper from "./components/LoginWrapper"

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
          <Route exact path="/" component={LoginWrapper} />
          <Route exact path="/login" component={LoginWrapper} />
          <Route path="/signup" component={LoginWrapper} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/new-recipe" component={NewRecipe} />
          <Redirect from="/login" to="/dashboard" />
        </Switch>

        <Footer />

      </main>
    </Context.Provider >
  );
}

export default App;

