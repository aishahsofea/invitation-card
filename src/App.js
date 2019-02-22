import React, { Component } from 'react';
import './App.css'
import Couple from './components/Couple';
import Journey from './components/Journey';
import ImportantPeople from './components/ImportantPeople';

class App extends Component {
  render() {
    return (
      <div>
        <Couple/>
        <Journey/>
        <ImportantPeople/>
      </div>     
    )
  }
}

export default App;