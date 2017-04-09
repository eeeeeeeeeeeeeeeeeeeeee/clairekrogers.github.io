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
  
  render() {
    const currentTab = this.props.location.pathname.slice(1);
    const classes = {
      1: currentTab === "about" ? "plum selected" : "",
      2: currentTab === "languages" ? "green selected" : "", 
      3: currentTab === "frameworks" ? "orange selected" : "", 
      4: currentTab === "testing" ? "deeppink selected" : "", 
      5: currentTab === "teaching" ? "burlywood selected" : "", 
      6: currentTab === "work" ? "yellow selected" : "" 
    }

    return (
        <section>
          <section className="app-container">
            <ul className="skill-list">
              <li><Link to="/about" className={classes[1]}>About</Link></li>
              <li><Link to="/languages" className={classes[2]}>Languages</Link></li>
              <li><Link to="/frameworks" className={classes[3]}>Frameworks</Link></li>
              <li><Link to="/testing" className={classes[4]}>Testing</Link></li>
              <li><Link to="/teaching" className={classes[5]}>Teaching</Link></li>
              <li><Link to="/work" className={classes[6]}>Sample Work</Link></li>
              <li><Link to="#" className={classes[6]}>Contact</Link></li>
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
    );
  }
};

export default withRouter(Main);
