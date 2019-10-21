import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";

//props needs history

const Login = (props) => {

    const [user, setUser] = useState({
        username: "admin", //remove after testing 
        password: "password" //remove after testing 
    });

    function handleSubmit(e) {
        e.preventDefault();

        axios.post("", user).then(res => {
            localStorage.setItem("token", res);
            props.history.push("/dashboard")
        }).catch(err => console.log(err))

        alert("working");
    }

    function handleChange(e) {
        let event = { ...e };
        setUser(user => {
            return {
                ...user,
                [event.target.name]: event.target.value
            }
        })
    }


    return (
        <form onSubmit={handleSubmit} autofill="on">
            <input type="text" name="username" placeholder="Username..." value={user.username} />
            <input type="password" name="password" placeholder="Password..." value={user.password} />
            <input type="submit" />
        </form>
    )
}

export default Login;