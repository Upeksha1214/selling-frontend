import React from 'react';
import './NavHome.css';
import { FaHome } from "react-icons/fa"; // import the home icon from react-icons/fa

import { Link } from 'react-router-dom';


function NavHome() {
  return (
    <div className='nav-container'> 
      <nav>
        <div>
         
        </div>
        <ul>
        <Link to='/'><li><a href='#'>Home</a></li> </Link>  
          <li><a href='#'>about</a></li>
          <li><a href='#'>services</a></li>
          <li><a href='#'>contact us</a></li>
          <input type={"search"} placeholder={"Search on budget pos"}></input> {/* Display a search input */}
        </ul>
        
        <button type='button'>Request Demo</button> {/* Display "Request Demo" button */}
        <p style={{color:"white" }}>sign in <span>register</span></p> {/* Display a "sign in/register" text */}
        <p style={{color:"white"}} className='hfar'><FaHome/></p> {/* Display the home icon */}
      </nav>
     
      {/* <br/>

      <center>
        <div className='popup'>
          <img className='huu' src={doneb} alt='wada karapn ' style={{height:"50px"}} ></img>  
          <h2>Thank You !!</h2>
          <p>Your details has been successfully submited.You can get your good at your place.Thanks!</p>
          <button type='button'>Ok</button>
        </div> 
      </center>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>  */}

      {/* <div>
        <Footerr/> 
      </div> */}
    </div>
  );
}

export default NavHome;

