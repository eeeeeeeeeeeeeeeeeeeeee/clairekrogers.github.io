import React from 'react';

export const About = () => (
  <aside className="content about">
    <h4>Web developer • Instructor at App Academy</h4>
    <summary>
      I currently teach at App Academy, an SF coding bootcamp.  
      <br/>
      In this role, I lecture and develop curriculum on: 
    </summary> 
      <ul>
        <li><span>React</span></li>
        <li><span>Redux</span></li>
        <li><span>JS</span></li>
        <li><span>Ruby</span></li>
        <li><span>Rails</span></li>
        <li><span>SQL</span></li>
        <li><span>git</span></li>
        <li><span>jQuery</span></li>
        <li><span>Testing (RSpec, Capybara, Jest, Enzyme)</span></li>
      </ul>      
  </aside>
);

export const Skills = () => (
  <aside className="content skills">
    <h3>Web Developement:</h3>
    <ul>
      <li><span>React/Redux/Flux</span></li>
      <li><span>Ruby/Rails</span></li>
      <li><span>Javascript</span></li>
      <li><span>JQuery</span></li>
      <li><span>Java</span></li>
      <li><span>HTML/CSS</span></li>
      <li><span>SQL</span></li>
    </ul>
    <h3>Testing:</h3>
    <ul> 
      <li><span>Jest/Enzyme</span></li> 
      <li><span>Jasmine</span></li> 
      <li><span>Capybara</span></li>
      <li><span>RSpec</span></li>
    </ul>
  </aside>
 );

export const Work = () => (
  <aside className="content">
    <ul>
      <li>Jest</li>
      <li>Enzyme</li>
      <li>Jasmine</li>
      <li>RSpec</li>
      <li>Capybara</li>
    </ul>
  </aside>
);



