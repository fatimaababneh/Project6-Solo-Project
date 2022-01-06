import React,{useState} from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
function SignUp() {
    const [adduser, setAdduser]=useState(localStorage.getItem("allusers")?JSON.parse(localStorage.getItem("allusers")):[]);
    const [user, setUser ] = useState({
        username:"",
        email: "",
        password: "",
        ensurepassword: ""
    })
    const handler=(e)=>{
        e.preventDefault();
        let immediateuser={username:e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        ensurepassword: e.target.ensurepassword.value};
        let userexist=false;
        let users=localStorage.getItem("allusers")?JSON.parse(localStorage.getItem("allusers")):[];
        console.log("fatima");
        adduser.forEach(element => {
         if(immediateuser.email===element.email){
            userexist=true;
            console.log("fatima1111");
        }   
        });

         if(!userexist){
            users.push(immediateuser);
            localStorage.setItem("allusers",JSON.stringify(users));
            setAdduser(users);
            
        }
    }
    return (
        <div className='container-sign'>

            <div className='form-style'>

             <form className='sign-form' onSubmit={handler}>
                <h2>SignUp</h2>
                <input type='text' placeholder='UserName' name='username'></input>
                <input type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' placeholder='Email' name='email'></input>
                <input type='password' placeholder='Password' name='password'></input>
                <input type='password' placeholder='EnsurePassword' name='ensurepassword'></input>
                <button>SignUp</button> <div><h5>I already have an account</h5><Link to="/Login">LogIn</Link></div>

            </form>

            </div>

        </div>
    )
}

export default SignUp
