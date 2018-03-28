import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';
import Header from './component/header/Header';
import route from './route';
import './styles/style.css'

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Header />
        {route}
      </div>
    );
  }
}

export default App;
