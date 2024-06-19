import React from "react";

function NavBar({ handleLoginClick, scrollToSection }) {
   const handleClick = () => {
      handleLoginClick();
   };
   return (
      <nav className="navbar">
         <div className="container">
            <div href="index.html" className="navbar-brand">
               <img src="logo_new.png" alt="logo" className="logo" onClick={() => scrollToSection('hero-section')}></img>
            </div>
            <ul className="navbar-menu">
               <li className="navbar-item">
                  <div className="navbar-link" onClick={() => scrollToSection('section-1')}>Section 1</div>
               </li>
               <li className="navbar-item">
                  <div className="navbar-link" onClick={() => scrollToSection('section-2')}>Section 2</div>
               </li>
               <li className="navbar-item">
                  <div className="navbar-link" onClick={() => scrollToSection('section-3')}>Section 3</div>
               </li>
               <li className="navbar-item">
                  <div className="navbar-link" onClick={() => scrollToSection('section-4')}>Section 4</div>
               </li>
               <li className="navbar-item">
                  <div className="navbar-link" onClick={() => scrollToSection('section-5')}>Section 5</div>
               </li>
            </ul>
            <ul className="navbar-buttons">
               <li className="navbar-item">
                  <div href="login.html" className="button" onClick={handleClick}>Log in</div>
               </li>
               <li className="navbar-item">
                  <div href="register.html" className="button brighter">Sign Up</div>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default NavBar;
