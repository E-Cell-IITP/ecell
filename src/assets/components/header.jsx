import { useState } from 'react';
import "./All.css"
// import { Link } from 'react-router-dom';
// import Coming from './Comings00n';
// import Team from './Team';
 function Navbar(){
  // State to control the menu toggle
  const [isNavOpen, setIsNavOpen] = useState(false);
    
  // Toggle function for menu visibility
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
<>
    <div >
    
      <nav>
      <input type="checkbox" id="nav-toggle"/>
        {/* Logo */}
        <div className="logo">
          Start<strong>In</strong>
        </div>

        {/* Navigation links */}
        <ul className={`links ${isNavOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/team">Team</a></li>
          <div className="btn small-scale"><a href="/register"><button>Register Now</button></a></div>
          {/* <li><a href="#work">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li> */}
          
        </ul>

        
        {/* Burger icon with label */}
        <label
          htmlFor="nav-toggle"
          className="icon-burger"
          onClick={handleNavToggle}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
        <div className='btn large-scale'><a href="/coming-soon"><button >Register Now</button></a></div>

      </nav>
<div className="nav-false"></div>
      {/* Container with images */}
      

      {/* Duplicate burger icon (for consistency, but unnecessary if not intended for mobile behavior) */}
      <label
        htmlFor="nav-toggle"
        className="icon-burger"
        onClick={handleNavToggle}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
    </div>
   

</>
  );
};

export default Navbar;
