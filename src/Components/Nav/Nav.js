import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
function Nav() {
    return (
        <div className='container'> 

       

            <nav className='style-nav'>
               
                    <div>Baby</div>
                    <div className='container-ul'>
                        <ul className='mid-nav'> 
                        <Link to='/'>  <li>Home</li> </Link>
                        <Link to='/cards'> <li>Shop</li></Link>
                        <Link to='/profile'><li>UserProfile</li></Link>
                        <Link to='/contact'><li>Contact Us</li></Link>
                        
                        </ul>
                    </div>
                
                    <Link to='/Login'><div>Login</div></Link>
                
            </nav>
            
        </div>
    )
}

export default Nav
