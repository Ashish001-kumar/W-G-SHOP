import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import logo from './image/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
   <div className="heder">
     <div className="logo">   
      <img src={logo} alt="" />    
     </div>
     <nav>
       <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
       </ul>
     </nav>

     <button className='logout'>
       <a href="/">Logout</a>
     </button>

   </div>
  );
};



export default Navbar;
