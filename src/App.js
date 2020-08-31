import React from 'react';
import './App.css'
import Nav from './Nav'
import About from './About'
import Card from './components/Carta'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import UserForm from './UserForm';
import messages from './messages.js';
import { Link } from 'react-router-dom';
import Login from './login.js';
import Tinder from './tindercard';


function App() {

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/register" component={UserForm} />
          <Route path="/messages" component={messages} />
        </Switch>
      </div>
    </Router >
  );
}

const Home = () => (
  <div>
    <Nav />
    <Tinder />
    {/* <img className="MatchBtns" src={require('./Match.png')} /> */}
    <Link className="btnreg" to='/login'>Login</Link>
  </div>
);


export default App;