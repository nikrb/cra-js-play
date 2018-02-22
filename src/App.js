import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  fileChange = e => {
    const file = e.target.files[0];
    let img;
    if (file) {
      img = new Image();
      img.onload = () => {
          console.log(img.width + " " + img.height);
      };
      img.src = URL.createObjectURL(file);
    }
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
        <input type="file" onChange={this.fileChange} />
      </div>
    );
  }
}

export default App;
