import React from "react";
import Login from "./Login"
import Signup from "./Signup"
import { Route } from "react-router-dom"

const LoginWrapper = (params) => {
    return (
        <section>
            <Route exact path="/" component={Login}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
        </section>
    )
}

export default LoginWrapper;
