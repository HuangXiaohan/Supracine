import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SearchMovie from './SearchMovie';
import MovieDetail from './MovieDetail';

ReactDOM.render(
  <Router>
    <div className="homepage">
      <Redirect to="/search" />
      <Link to="/search">
        <span className="supra">SUPRA</span><span className="cine">CINE</span>
      </Link>
      <Switch>
        <Route path="/search">
          <SearchMovie/>
        </Route>
        <Route path="/movie/:id">
          <MovieDetail/>
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
