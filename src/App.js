import React, { Component } from 'react';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Couple from './components/Couple';
import Journey from './components/Journey';
import ImportantPeople from './components/ImportantPeople';
import Rsvp from './components/Rsvp';

class App extends Component {
  render() {
    AOS.init();
    return (
      <div>
        <Couple/>
        <Journey/>
        <ImportantPeople/>
        <Rsvp/>
      </div>     
    )
  }
}

export default App;