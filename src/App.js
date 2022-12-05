import React, { useState, useEffect } from 'react';
// import { slide as Menu } from 'react-burger-menu';
import Languages from './containers/languages/languages';
import { Header, Footer, Tech, Blog, Work, StrongPoints } from './containers';
import { Navbar, CTA } from './components';

import './App.css';

const App = () => {
  //  eslint-disable-next-line
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };

  return (
    <div className="App" id="outer-container">
      <Navbar />
      <main id="page-wrap">
        <div className="gradient__bg">
          <Header />
        </div>
        <Languages />
        <Tech />
        <CTA />
        <Blog />
        <Work />
        {/* <Courses /> */}
        <StrongPoints />
      </main>
      <Footer />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top" type="button">
          &#8593;
        </button>
      )}
      {/* &#8593; is used to create the upward arrow */}
    </div>
  );
};

export default App;
