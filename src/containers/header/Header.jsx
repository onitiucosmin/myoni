import React from 'react';
import goldenLaurel from '../../assets/goldenLaurel.png';
import cosmin from '../../assets/profilepicture.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Who am i ?</h1>
      <p>A developer who does not fall into the usual code, Ready to make life better and easier!</p>

      <div className="gpt3__header-content__input">
        <button type="button"><a href="#portfolio">See my projects</a></button>
        <button type="button"><a href="#contact">Contact me!</a></button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={goldenLaurel} href="https://godmenu-db556.web.app/" target="#" />
        <p><a href="https://godmenu-db556.web.app/" target="#">Join my Nutrition Planning Network</a></p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={cosmin} />
    </div>
  </div>
);

export default Header;
