import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(Date.parse("Feb 2, 2020 23:00:00 GMT +1")),
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,

    }
    this.calculateCountdown = this.calculateCountdown.bind(this);
    this.stop = this.stop.bind(this);
    this.addLeadingZeros = this.addLeadingZeros.bind(this);
    this.renderDuration = this.renderDuration.bind(this);

  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.state.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }
  
  stop() {
    clearInterval(this.interval);
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }


  renderDuration() {
    let countdownMarkup =
      <ul id="countdown">
        <li><div><span>{this.addLeadingZeros(this.state.days)}</span>{`${this.state.days !== 1 ? 'DAYS' : 'DAY'}`}</div></li>
        <li><div><span>{this.addLeadingZeros(this.state.hours)}</span>{`${this.state.hours !== 1 ? 'HOURS' : 'HOUR'}`}</div></li>
        <li><div><span>{this.addLeadingZeros(this.state.min)}</span>{`${this.state.min !== 1 ? 'MINUTES' : 'MINUTE'}`}</div></li>
        <li><div><span>{this.addLeadingZeros(this.state.sec)}</span>{`${this.state.sec !== 1 ? 'SECONDS' : 'SECOND'}`}</div></li>
      </ul>
      
    return countdownMarkup;
   
  }

  render() {
    AOS.init();
    return (
      <div >
        <div>
        <h1>celebrating J & A</h1>
        {this.renderDuration()}
        </div>
      </div>
    )
  }
}

export default Main;