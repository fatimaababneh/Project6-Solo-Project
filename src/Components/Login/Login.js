import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
function Login() {

    const [password , setpassword] =useState(0);
    const [name, setname] =useState('');
    const handleuser=()=>{

    }
    return (
        <div className='container1'>
        <div className='form-styl'>

            <form className='containerlog' onSubmit={handleuser}>
                <h2>LogIn</h2>
                <input placeholder='UserName'></input>
                <input placeholder='Password'></input>
                <button>LogIn</button> <div><h5>if you don't have an account pleasse create one</h5><Link to="/Signup">SignUp</Link></div>
            </form>

        </div>
        </div>
    )
}

export default Login
