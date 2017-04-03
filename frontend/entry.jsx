import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Main />, root);
  /*
  ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={Main}/>
      </div>
    </Router>, root);*/
});




