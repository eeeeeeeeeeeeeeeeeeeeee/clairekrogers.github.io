import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { About, Languages, Frameworks } from './about';

export default class Main extends React.Component {
  render() {
    return (
      <Router>
        <section>
          <section className="app-container">
            <ul className="skill-list">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/languages">Languages</Link></li>
              <li><Link to="/frameworks">Frameworks</Link></li>
              <li><Link to="/testing">Testing</Link></li>
              <li><Link to="/teaching">Teaching</Link></li>
              <li><Link to="/work">Sample Work</Link></li>
              <li><Link to="#">Contact</Link></li>
            </ul>
          <Route path="/about" component={About} />
          <Route path="/languages" component={Languages} />
          <Route path="/frameworks" component={Frameworks} />
          </section>
          <footer>
            <a href="https://github.com/clairekrogers">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://linkedin.com">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </footer>
        </section>
      </Router>
    );
  }
};


