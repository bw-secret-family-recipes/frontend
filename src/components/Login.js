import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";

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
        <Wrap>
            <MainForm onSubmit={handleSubmit} autofill="on">
                <InputBox type="text" name="username" placeholder="Username..." value={user.username} />
                <InputBox type="password" name="password" placeholder="Password..." value={user.password} />
                <InputBox type="submit" />
            </MainForm>
        </Wrap>
    )
}

export default Login;