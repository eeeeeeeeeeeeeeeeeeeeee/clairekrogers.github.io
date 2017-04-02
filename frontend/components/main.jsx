import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <section className="app-container">
        <ul className="skill-list">
          <li>About</li>
          <li>Languages</li>
          <li>Frameworks</li>
          <li>Testing</li>
          <li>Teaching</li>
          <li>Sample Work</li>
          <li>Contact</li>
        </ul>
        <footer>
          <i className="fa fa-github" aria-hidden="true"></i>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </footer>
      </section>
    );
  }
};
