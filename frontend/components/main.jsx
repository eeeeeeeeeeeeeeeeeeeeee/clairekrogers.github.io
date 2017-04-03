import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class Main extends React.Component {
  render() {
    return (
      <Router>
        <section className="app-container">
          <ul className="skill-list">
            <li><Link to="/about">About</Link></li>
            <li>Languages</li>
            <li>Frameworks</li>
            <li>Testing</li>
            <li>Teaching</li>
            <li>Sample Work</li>
            <li>Contact</li>
          </ul>
          <footer>
            <a href="https://github.com/clairekrogers">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://linkedin.com">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </footer>
          <Route path="/about" component={About} />
        </section>
      </Router>
    );
  }
};


const About = () => (<div>hi</div>);
