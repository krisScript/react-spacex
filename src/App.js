import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getData from './getData/getData';

import  Provider  from './Context';
import Router from './components/Router'
class App extends Component {
 

  render() {
    return (
      <Provider>
       <Router/>
      </Provider>
      
      
    );
  }
}

export default App;


{/* <Consumer>
{value => {
  console.log(value)
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
  )
 
}}
</Consumer> */}