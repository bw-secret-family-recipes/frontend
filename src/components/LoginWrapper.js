import React from "react";
import Login from "./Login"
import Signup from "./Signup"
import { Route } from "react-router-dom"
import NavLrg from './NavLrg';


const LoginWrapper = (props) => {

    return (
        <>
            <header className="App-header">
                <NavLrg {...props} />
            </header>
            <section>
                <Route exact path="/" component={Login}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/signup" component={Signup}></Route>
            </section>
        </>
    )
}

export default LoginWrapper;
