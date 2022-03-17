import React,{useEffect, useState} from 'react'
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
   const [valid, setValid]= useState(
       {
           name:"",
           email:"",
           pass:"",
           confirmpass:"",
       }
   );
   let userexist=false;
    const handler=(e)=>{
        e.preventDefault();
        let immediateuser={username:e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        ensurepassword: e.target.ensurepassword.value};
        
        let users=localStorage.getItem("allusers")?JSON.parse(localStorage.getItem("allusers")):[];
        console.log("fatima");
        adduser.forEach(element => {
         if(immediateuser.email===element.email){
            userexist=true;
        }   
        });

         if(!userexist){
            setUser(immediateuser);
            // users.push(immediateuser);
            // localStorage.setItem("allusers",JSON.stringify(users));
            // setAdduser(users);
            
        }
        if(user.username.length<3){
            setValid({...valid,name:"username is too short",});
        }
    }
    useEffect(()=>{
   
   if(user.username.length>3){
        setValid({...valid,name:"",});
        if(!userexist){
            setValid({...valid,email:"this email already exist"});
        }
        if(user.username.length>3 && user.password.length >5 && user.password === user.ensurepassword){
             localStorage.setItem("allusers",JSON.stringify(user));
        }
    }
    },[userexist,user]);

    return (
        <div className='container-sign'>

            <div className='form-style'>

             <form className='sign-form' >
                <h2>SignUp</h2>
                <input type='text' onChange={handler} placeholder='UserName' name='username'></input>
               <small><span>{valid.name}</span></small> 
                <input type='email' onChange={handler} pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' placeholder='Email' name='email'></input>
                <input type='password' onChange={handler} placeholder='Password' name='password'></input>
                <input type='password' onChange={handler} placeholder='EnsurePassword' name='ensurepassword'></input>
                <button >SignUp</button> <div><h5>I already have an account</h5><Link to="/Login">LogIn</Link></div>

            </form>

            </div>

        </div>
    )
}

export default SignUp
