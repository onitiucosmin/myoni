import React from 'react';
import FeatureSvg from '../../components/featureSvg/FeatureSvg';
import './languages.css';

const featuresData = [
  {
    title: 'C++',
    text: 'The one i started with back in highschool and used in my first internship at Siemens, where i made a project with C++ for a control-access system developed with Visual Studio and Qt. It was also the main language studied at my Mthree Alumni Program and the position at Morgan Stanley.',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    title: 'Javascript',
    text: 'The latest language I studied, both in the front-end and back-end (A few applications using frameworks like React and Next.js, done in Node.js). Also studied in OSF Academy Program, which involved using endpoints of REST APIs to create a dynamic website, with Node.js and Express(including REST APIs, AJAX, jQuery, MongoDB, Unit testing using Mocha and templating with Pug/JADE and Bootstrap 5)',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    title: 'Typescript',
    text: 'While basically a layer over Javascript, it is the language i use in all my newer projects and at my current workplace',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    title: 'HTML',
    text: 'While not a hard thing to learn, it has it\'s subtleties, which can improve a site',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    title: 'CSS/ SCSS',
    text: 'The All-father of "I came here to code and have fun " and it damn well shows it. There are always new tricks to use and people finding more interesting stuff to do with it',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    title: 'Bash/ Shell',
    text: 'The one thing it\'s not possible to work as a dev without. Everything from filesystems to regex searches, i learnt it the hard way.',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
  },
  {
    title: 'Python',
    text: 'Used for scripting, developing web apps with Wagtail, Django and Flask and a machine learning, combined with the Pyspark, Pandas, Pytorch libraries',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    title: 'Flutter',
    text: 'My first SDK used for mobile development, made developing my first apps completely streamlined',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {
    title: 'Scala',
    text: 'Used in my last workplaces, for data preprocessing combined with the Spark library',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg',
  },
  {
    title: 'C# / .NET Core',
    text: 'Main technology to develop the backend in my latest workplace with Entity framework Core',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  },
  {
    title: 'Solidity',
    text: 'My recent passion, used to develop my first smart contracts and tokens, and will be heavily used in the upcoming period',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-plain.svg',
  },
];

const Languages = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Let me tell you about my expertise and where it came from</h1>
    </div>
    <div className="row">
      {featuresData.map((item, index) => (
        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
          <FeatureSvg title={item.title} text={item.text} imgsrc={item.src} key={item.title + index} />
        </div>
      ))}
    </div>
  </div>
);

export default Languages;
