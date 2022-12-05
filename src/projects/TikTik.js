import React from 'react';
import k1 from '../assets/tiktik-1.PNG';
import k2 from '../assets/tiktik-2.PNG';
import k3 from '../assets/tiktik-3.PNG';

const ecommerce = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://tik-tik-six.vercel.app/" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        INTRODUCTION (Link to actual site)
      </a>
    </h1>
    <h2 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://github.com/Javascript-Projects-Cosmin/TikTik" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        GitHub Link
      </a>
    </h2>
    <p>
      TikTok has taken over the world recently more or less. I wanted to see what it takes to create such an application, and in this case i went with a responsive web app instead of a mobile app.
      The application was developed based on Next.js and it&apos;s file based routing and Server side rendering, and Sanity as a content managing system and backend endpoint.
      The application also includes Google authentification with Google Identity Services, Zustand usage (A lightweight redux), TailwindCSS for styling and Axios for calls
    </p>
    <img src={k1} style={{ width: '100%', marginTop: '1rem' }} />
    <img src={k2} style={{ width: '100%', marginTop: '1rem' }} />
    <img src={k3} style={{ width: '100%', marginTop: '1rem' }} />
  </div>
);

export default ecommerce;
