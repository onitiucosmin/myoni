import React from 'react';
import godmenu1 from '../assets/god2-1.PNG';
import godmenu2 from '../assets/god2-2.PNG';

const godMenu = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://godmenu-db556.web.app/" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        INTRODUCTION (Link)
      </a>
    </h1>
    <p>
      Here we go, version 2!!!
      <br /><br />
      Now that i have a bit more experience and actual work in the web development space, i can put my skills to use and redevelop my diet application with new technologies.
      Between switching to Angular and Typescript, Firebase and its Firestore API, services as storage and utility, animations and lazy-loading
      the project went on to become a lot simpler to make, a lot faster and lot nicer looking.
      <br /><br />
      Some interesting things you might find are front-end paginations, a really cool responsive sidenav, some surprises here and there, and a really interactive design.
    </p>
    <img src={godmenu1} style={{ width: '100%' }} />
    <img src={godmenu2} style={{ width: '100%' }} />
  </div>
);

export default godMenu;
