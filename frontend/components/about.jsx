import React from 'react';

export const About = () => (
  <aside className="content about">
    <h4>Web developer • Instructor at App Academy</h4>
    <summary>
      I currently teach at App Academy, a coding bootcamp in San Francisco.  In this role, I lecture and develop curricula on full-stack web development, including React/Redux, Ruby/Rails, Javascript, SQL, git and testing.
    <br/>
    <br/>
      Prior to App Academy, I worked for Accenture as an analyst in Electronics & High Tech, focusing on the upgrade and expansion of an Oracle R12 global ERP system for a large Silicon Valley tech company.
    </summary>
  </aside>
);

export const Skills = () => (
  <aside className="content skills">
    <div>
      <h3>Javascript</h3>
      <p>ES5/ES6, React.js, Flux, Redux, jQuery</p>
    </div>
    <div>
      <h3>Ruby / DB</h3>
      <p>Ruby, Ruby on Rails, SQL</p>
    </div>
    <div>
      <h3>Testing</h3>
      <p>Jest, Enzyme, RSpec, Capybara, Jasmine</p>
    </div>
    <div>
      <h3>Web Design</h3>
      <p>HTML, CSS</p>
    </div>
    <div>
      <h3>Version Control</h3>
      <p>Git, Github</p>
    </div>
    <div>
      <h3>Other</h3>
      <p>Java, Matlab, Arduino, LabView</p>
    </div>
  </aside>
);

export const Work = () => (
  <aside className="content work">
    <div>
      <h3>Ursa Puzzles | <a href="http://github.com/clairekrogers/ursapuzzles"><i className="fa fa-github" aria-hidden="true"></i></a> | <a href="http://ursapuzzles.com" className="live">Live</a></h3>
      <ul>
        <li>
          <span>
            Single-page React.js app built in Flux architecture with Ruby on Rails & PostgreSQL backend
          </span>
        </li>
        <li>
          <span>
            Custom algorithm interprets user input for intuitive and dynamic gameplay
          </span>
        </li>
      </ul>
    </div>
    <div>
      <h3>Markdown Slides | <a href="http://github.com/clairekrogers/slides"><i className="fa fa-github" aria-hidden="true"></i></a> | <a href="http://markdown-slides.com" className="live">Live</a></h3>
      <ul>
        <li>
          <span>
            React app for writing and presenting slide shows written in markdown syntax
          </span>
        </li>
        <li>
          <span>
            Features an embedded text editor, automatic syntax highlighting, live render preview, and presentation mode
          </span>
        </li>
      </ul>
    </div>
     <div>
      <h3>Redux Testing | <a href="http://github.com/clairekrogers/redux-testing-demo"><i className="fa fa-github" aria-hidden="true"></i></a></h3>
      <ul>
        <li>
          <span>
            Demo assessment administered to students testing complete async Redux cycle using Jest and Enzyme
          </span>
        </li>
        <li>
          <span>
            Presented at ReactJS meetup in San Francisco
          </span>
        </li>
      </ul>
    </div>
  </aside>
);