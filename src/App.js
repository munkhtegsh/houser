import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';
import Header from './component/header/Header';
import route from './route';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Header />
        {route}
      </div>
    );
  }
}

export default App;
