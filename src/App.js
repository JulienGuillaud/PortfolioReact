import React, { useEffect, useState } from 'react';
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import './App.css';

function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionPositions, setSectionPositions] = useState([]);

  useEffect(() => {
    const container = document.querySelector('.App');
    const sections = document.querySelectorAll('.blur-container');
    const positions = Array.from(sections).map(sec => sec.offsetTop);
    setSectionPositions(positions);

    const handleScroll = (e) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      let newSection = currentSection + direction;
      newSection = Math.max(0, Math.min(sections.length - 1, newSection));
      // console.log("Current section:", currentSection);
      // console.log("New section:", newSection);
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
      }
    };

    container.addEventListener('wheel', handleScroll);
    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection]);

  useEffect(() => {
    if (sectionPositions.length > 0) {
      window.scrollTo({
        top: sectionPositions[currentSection] - 129,
        behavior: 'smooth'
      });
    }
  }, [currentSection, sectionPositions]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      const topPosition = rect.top + window.scrollY - 129;
  
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
  
      const threshold = 10; // Pixel range for considering a match
      const sectionIndex = sectionPositions.findIndex(pos => Math.abs(pos - (topPosition + 129)) <= threshold);
      if (sectionIndex !== -1) {
        setCurrentSection(sectionIndex);
      }
    }
  };
  return (
    <div className="App">
      {/* <LoginForm isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} /> */}
      {isShowLogin && <LoginForm isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} />}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      </div>
      {/* <!-- <div className="hero"> --> */}
      <div id="hero-section" className="blur-container">
        <NavBar handleLoginClick={handleLoginClick} scrollToSection={scrollToSection} />
        <div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">GUILLAUD Julien</h1>
              <h2 className="hero-subtitle">PORTFOLIO</h2>
              <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
              <a href="register.html" className="hero-button">Get Started</a>
              <div className="socials">
                <a href="" className="social-link">
                  <img src="icons8-github-48.png" alt="github" className="social-icon"></img>
                </a>
                <a href="" className="social-link">
                  <img src="icons8-linkedin-48.png" alt="linkedin" className="social-icon"></img>
                </a>
                <a href="" className="social-link">
                  <img src="icons8-instagram-48.png" alt="instagram" className="social-icon"></img>
                </a>
              </div>
            </div>
            <div className="hero-image">
              {/* <img src="hero-image.png" alt="hero image" className="hero-image"> */}
              <div className="color-box-container">
                <div className="color-box" id="color1"></div>
                <div className="color-box" id="color2"></div>
                <div className="color-box" id="color3"></div>
                <div className="color-box" id="color4"></div>
                <div className="color-box" id="color5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="section-1" className="blur-container">
        <div className="section-page">
          <div className="container">
            <div className="about-content">
              <h1 className="hero-title">Section 1</h1>
              <h2 className="hero-section">Sous-titre</h2>
              <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="section-2" className="blur-container">
        <div className="section-page">
          <div className="container">
            <div className="about-content">
              <h1 className="hero-title">Section 2</h1>
              <h2 className="hero-section">Sous-titre</h2>
              <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="section-3" className="blur-container">
        <div className="section-page">
          <div className="container">
            <div className="about-content">
              <h1 className="hero-title">Section 3</h1>
              <h2 className="hero-section">Sous-titre</h2>
              <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="section-4" className="blur-container">
        <div className="section-page">
          <div className="container">
            <div className="about-content">
              <h1 className="hero-title">Section 4</h1>
              <h2 className="hero-section">Sous-titre</h2>
              <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="section-5" className="blur-container">
        <div className="section-page">
          <div className="container">
            <div className="about-content">
              <h1 className="hero-title">Section 5</h1>
              <h2 className="hero-section">Sous-titre</h2>
              <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Bubble scroll to top --> */}
      <div className="bubble-scroll">
        <a className="bubble-scroll-link" onClick={() => scrollToSection('hero-section')}>
          <img src="icons8-chevron-up-48.png" alt="up" className="bubble-scroll-icon"></img>
        </a>
      </div>
    </div>
  );
}
// function scrollToSection(sectionId) {
//   const section = document.getElementById(sectionId);
//   if (section) {
//     const rect = section.getBoundingClientRect();
//     const topPosition = rect.top + window.scrollY;
//     console.log("Rect top:", rect.top);
//     console.log("Window scrollY:", window.scrollY);
//     console.log("Calculated topPosition:", topPosition);

//     window.scrollTo({
//       top: topPosition - 129,
//       behavior: 'smooth'
//     });
//   }
// }


export default App;
