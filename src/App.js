import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount = () => {
    // computed property syntax
    // const key = "one"
    const key = {
      toString: () => "one"
    };
    const t = {
      [key](a) {
        return a+1;
      }
    };
    const r = t.one(3);
    console.log( "result:", r);
  };
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
      </div>
    );
  }
}

export default App;
