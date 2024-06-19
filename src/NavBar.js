import React, { useState, useEffect } from "react";
import { useSmartphone } from './SmartphoneContext';

function NavBar({ handleLoginClick, scrollToSection, isOpen }) {
   const isSmartphone = useSmartphone();
   const [colorChange, setColorChange] = useState(false);

   const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', changeNavbarColor);
      return () => {
        window.removeEventListener('scroll', changeNavbarColor);
      }
    }, []);
   return (
      <nav className={`navbar ${isOpen ? "active" : ""}`}>
         {!isSmartphone ? <div className="navbar-brand"><img src="logo_new.png" alt="logo" className="logo" /></div> : ""}
         <div className={`container ${isOpen ? "active" : ""} ${colorChange ? "blurry" : ""}`}>
            <ul className="navbar-menu">
               {['section-1', 'section-2', 'section-3', 'section-4', 'section-5'].map((section, index) => (
                  <li className="navbar-item" key={index}>
                     {isSmartphone ? (
                        <a href={`#${section}`} className="navbar-link">
                           <div onClick={() => scrollToSection(section)}>Section {index + 1}</div>
                        </a>
                     ) : (
                        <div className="navbar-link" onClick={() => scrollToSection(section)}>Section {index + 1}</div>
                     )}
                  </li>
               ))}
            </ul>
            <ul className="navbar-buttons">
               <li className="navbar-item">
                  <div className="button" onClick={handleLoginClick}>Log in</div>
               </li>
               <li className="navbar-item">
                  <div className="button brighter">Sign Up</div>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default NavBar;
