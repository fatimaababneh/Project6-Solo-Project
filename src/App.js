import logo from './logo.svg';
import './App.css';
import {Routes as Switch,Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Hero from './Components/Hero/Heroimg';
import Nav from './Components/Nav/Nav';
import Cards from './Components/Cards/Cards';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import SignUp from './Components/SignUp/SignUp';
import Contact from './Components/Contact/Contact'
function App() {
  return (
    <div >
      <header >
      <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path="/" element={<Hero/>}/>
        <Route path="/cards" element={<Cards />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Switch>
      </BrowserRouter>
       
      </header>
    </div>
  );
}

export default App;
