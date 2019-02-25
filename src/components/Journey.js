import React, { Component } from 'react';

class Journey extends Component {
  constructor() {
    super();
    this.state = {
      month: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
      year: [2014, 2014, 2015, 2016, 2017],
      eventTitle: ['First Meet', 'First Date', 'First Trip', 'Proposal', 'Wedding'],
      description: Array(5).fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.')
    }
    this.generateTimeline = this.generateTimeline.bind(this);
  }

  generateTimeline(num) {
    let markup = 
    <div className="timeline" data-aos="fade-up">
      <div className="icon"></div>
      <div className="date-content">
          <div className="date-outer">
              <span className="date">
                  <span className="month">{this.state.month[num]}</span>
                  <span className="year">{this.state.year[num]}</span>
              </span>
          </div>
      </div>
      <div className="timeline-content">
          <h3 className="event-title">{this.state.eventTitle[num]}</h3>
          <p className="description">
              {this.state.description[num]}
          </p>
      </div>
    </div>

    return markup;
   }

  render() {       
    return(
      <div>
        <h1 className="title" data-aos="fade-in">Our Journey</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa, scelerisque vel diam non.</p>

        <div className="container" data-aos="fade-down">
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                {this.generateTimeline(0)}
                {this.generateTimeline(1)}
                {this.generateTimeline(2)}
                {this.generateTimeline(3)}
                {this.generateTimeline(4)}    
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }

};

export default Journey;

