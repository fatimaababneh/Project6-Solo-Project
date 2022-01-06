import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
function Login() {
const navigate=useNavigate();
    const [password , setpassword] =useState(0);
    const [name, setname] =useState('');
    const handleuser=(e)=>{
        e.preventDefault();
        let currentuser={username:e.target.username.value , password:e.target.password.value};

        let users=localStorage.getItem("allusers") ?JSON.parse(localStorage.getItem("allusers")):[];
        users.forEach(element => {
            
            if(currentuser.username === element.username && currentuser.password === element.password)
            { currentuser={username:element.username,email:element.email,password:element.password}
                 localStorage.setItem("loggedUser",JSON.stringify(currentuser));
            
           alert('logged in');
           navigate("/");
        }
        });

    }
    return (
        <div className='container1'>
        <div className='form-styl'>

            <form className='containerlog' onSubmit={handleuser}>
                <h2>LogIn</h2>
                <input type="text" placeholder='UserName' name="username"></input>
                <input type="password" placeholder='Password' name="password"></input>
                <button>LogIn</button> <div><h5>if you don't have an account pleasse create one</h5><Link to="/Signup">SignUp</Link></div>
            </form>

        </div>
        </div>
    )
}

export default Login
