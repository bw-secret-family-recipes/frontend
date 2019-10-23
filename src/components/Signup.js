import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import { axiosAuth } from '../utils';
import {useForm, useField, splitFormProps} from 'react-form';

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
const BtnClick = styled.button`
  width: 14em;
  height:3em;
  margin: auto;
  border: 1px solid #3f043c;
  border-radius: 3px;
  background: white;
  color: #d85505;
`;
const InputBox = styled.input`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: .5em;
  margin: .5rem;

  
  }
`;

function validateFirstName(value){
    if (!value){
        return 'Please Enter Your First Name';
    }
    return false;
}



const InputField = React.forwardRef((props,ref) => {
    //form specific props
    const [field, fieldOptions, rest] = splitFormProps(props)

    const {
        meta: {error, isTouched, isValidating},
        getInputProps
    } = useField(field, fieldOptions);


    return(
        <>
         <input {...getInputProps({ref, ...rest})} /> {" "}
         {isValidating ? (
             <em></em>
         ) : isTouched && error ? (<em>{error}</em>) : null}
        </>

    )

})




const Signup = (props) => {

    const [confirmPass, setConfirmPass] = useState('')
    const [newUser, setNewUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
    })

    const handlePassword = e => {
        e.preventDefault();
        setConfirmPass(e.target.value);
    }

    const handleChange = e => {
        e.preventDefault();
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (newUser.password !== confirmPass) {
            alert(`Passwords don't match`);
        } else {

            axiosAuth().post('auth/register', newUser)
            .then(response => {
                console.log(response)
                props.history.push('/login');
            })
            .catch(err => console.log(err))
        }
    }


    return (
        <Wrap>
            <MainForm>
                <h1>Sign Up</h1>
                <InputBox required='true' type='text' name='first_name' value={newUser.first_name} placeholder='First Name' onChange={handleChange} />
                <InputBox required type='text' name='last_name' value={newUser.last_name} placeholder='Last Name' onChange={handleChange} />
                <InputBox required type='email' name='email' value={newUser.email} placeholder='email' onChange={handleChange} />
                <InputBox required type='text' name='username' value={newUser.username} placeholder='Username' onChange={handleChange} />
                <InputBox required type='password' name='password' value={newUser.password} placeholder='Password' onChange={handleChange}/>
                <InputBox required type='password' name='confirmPass' value={confirmPass} placeholder='Confirm Password' onChange={handlePassword} />
                <BtnClick onClick={handleSubmit} >Submit</BtnClick>
                <Link to="/login">Login</Link>
            </MainForm>
        </Wrap>
    )
}

export default Signup


// if (password !== confirmPassword) {
//     alert("Passwords don't match");
//   } else {