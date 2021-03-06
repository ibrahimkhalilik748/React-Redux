import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Result from './components/Result/Result';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryList from './components/CountryList/CountryList';

function App() {
  return (
    <div className="App container">
      <Router>
        <div>
            <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Result></Result>
            </Route>
            <Route path="/home">
              <Result></Result>
            </Route>
            <Route path="/CountryList">
              <CountryList></CountryList>
            </Route>
            <Route path="*">
              <h1 className="found">Page Not Found 404</h1>
              </Route>
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
