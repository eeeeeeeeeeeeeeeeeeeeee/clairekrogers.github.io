import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import { About, Skills, Work } from './about';

class Main extends React.Component {
  constructor() {
    super();
    this.state = { selected: undefined };
  }
  
  render() {
    const currentTab = this.props.location.pathname.slice(1);
    const classes = {
      1: currentTab === "about" || currentTab === "" ? "orange selected" : "",
      2: currentTab === "skills" ? "green selected" : "", 
      3: currentTab === "work" ? "yellow selected" : "" 
    }

    return (
        <section>
          <section className="app-container">
            <ul className="skill-list">
              <li><Link to="/about" className={classes[1]}>About</Link></li>
              <li><Link to="/skills" className={classes[2]}>Skills</Link></li>
              <li><Link to="/work" className={classes[3]}>Sample Work</Link></li>
            </ul>
         
            <Route exact path="/" component={About}/>
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/work" component={Skills} />
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
    );
  }
};

export default withRouter(Main);
