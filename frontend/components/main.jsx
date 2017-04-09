import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import { About, Languages, Frameworks, Testing, Teaching, Work } from './about';

class Main extends React.Component {
  constructor() {
    super();
    this.state = { selected: undefined };
  }

  componentWillReceiveProps(nextProps) {
    debugger;
  }

  render() {
    const currentTab = this.props.location.pathname.slice(1);
    const classes = {
      1: currentTab === "about" ? "plum" : "",
      2: currentTab === "languages" ? "green" : "", 
      3: currentTab === "frameworks" ? "orange" : "", 
      4: currentTab === "testing" ? "deeppink" : "", 
      5: currentTab === "teaching" ? "burlywood" : "", 
      6: currentTab === "work" ? "yellow" : "" 
    }
    debugger;

    return (
      <Router>
        <section>
          <section className="app-container">
            <ul className="skill-list">
              <li className={classes[1]}><Link to="/about">About</Link></li>
              <li className={classes[2]}><Link to="/languages">Languages</Link></li>
              <li className={classes[3]}><Link to="/frameworks">Frameworks</Link></li>
              <li className={classes[4]}><Link to="/testing">Testing</Link></li>
              <li className={classes[5]}><Link to="/teaching">Teaching</Link></li>
              <li className={classes[6]}><Link to="/work">Sample Work</Link></li>
              <li className={classes[6]}><Link to="#">Contact</Link></li>
            </ul>
         
            <Route path="/about" component={About} />
            <Route path="/languages" component={Languages} />
            <Route path="/frameworks" component={Frameworks} />
            <Route path="/testing" component={Testing} />
            <Route path="/teaching" component={Teaching} />
            <Route path="/work" component={Work} />
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

export default withRouter(Main);
