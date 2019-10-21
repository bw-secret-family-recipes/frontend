import React, {useState, useEffect} from 'react'
import axios from 'axios';

const SearchForm = (props) => {
    
    const [confirmPass, setConfirmPass] = useState('')
    const [newUser, setNewUser] = useState({

        username: '',
        password:'',
    })    
    
    const handlePassword = e => {
        setConfirmPass(e.target.value);
        if ( newUser.password !== confirmPass){
            alert('Passwords Do Not Match');
        } else {
            
        }
    }


    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = e => {
        e.preventDefault();

        axios.post('', newUser)
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(error))
    }

    
    return (
        <div>
            <form onClick={handleSubmit}>
                <input type='text' name='username' value='newUser.username' placeholder='Username' onChange={handleChange} />
                <input type='text' name='username' value='newUser.password' placeholder='Password' onChange={handleChange} />
                <input type='text' name='username' value='confirmPass' placeholder='Confirm Password' onChange={handlePassword} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchForm


// if (password !== confirmPassword) {
//     alert("Passwords don't match");
//   } else {