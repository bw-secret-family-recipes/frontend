import React, { useEffect, useState, useContext } from 'react';
import styled from "styled-components";
import { recipe } from "../data"
import axios from "axios"
import { Context, axiosAuth } from "../utils"
import { Link } from "react-router-dom"

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d85505;
  padding-top: 5%;
  padding-bottom: 5%;
`;
const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1em;
  background: #f2e2ce;
  border-radius: 3px;
`;
const InputBox = styled.input`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: .5em;
  margin: .5rem;
`;
const BtnClick = styled.button`
    width: 14em;
    height: 3em;
    margin: auto;
    border: 1px solid #3f043c;
    border-radius: 3px;
    background: white;
    color: #d85505;
`;


//props needs history

const Login = (props) => {

    const state = useContext(Context)

    const [user, setUser] = useState({
        username: "admin", //remove after testing 
        password: "password" //remove after testing
    });

    function handleSubmit(e) {
        e.preventDefault();

        localStorage.setItem("token", "asd") //remove later
        props.history.push("/dashboard") //remove later

        state.dispatch({ // delete when backend is  up
            type: "ADD",
            payload: recipe
        })

        axiosAuth().post("/auth/login", user).then(res => {
            localStorage.setItem("token", res);
            props.history.push("/dashboard")

            axiosAuth.get("recipes/").then(res => {
                state.dispatch({
                    type: "INIT",
                    payload: res
                })
            }).catch(res => {
                console.log(res)
            })

        }).catch(err => console.log(err))



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
        <Wrap>

            <MainForm onSubmit={handleSubmit} autofill="on">
                <h1>Login</h1>
                <InputBox onChange={handleChange} type="text" name="username" placeholder="Username..." value={user.username} />
                <InputBox onChange={handleChange} type="password" name="password" placeholder="Password..." value={user.password} />
                <BtnClick type="submit" > Submit </BtnClick>
                <Link to="/signup">Signup</Link>
            </MainForm>

        </Wrap>
    )
}

export default Login;