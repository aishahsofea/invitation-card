import React, { Component } from 'react';

class Rsvp extends Component {
  constructor() {
    super();
    this.renderMarkup = this.renderMarkup.bind(this);
  }

  renderMarkup() {
    let formMarkup =
    <div className="form-container">
      <div className="form-wrapper">
      <form className="container" id="rsvp-form">
        <div class="form-group row">
          <label for="RSVPCode" class="col-sm-2 col-form-label">RSVP Code:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"  placeholder="RSVP Code"/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName">Full Name</label>
            <input type="name" class="form-control" placeholder="Name"/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input type="email" class="form-control" placeholder="Email"/>
          </div>
        </div> 
          
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="numberOfGuests">Guests</label>
            <select className="custom-select">
              <option selected>Choose...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="events">Attending..</label>
            <select className="custom-select">
              <option selected>Choose...</option>
              <option value="reception">Reception</option>
              <option value="weddingParty">Wedding Party</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="songSuggestions">Songs you would like to suggest</label>
          <textarea class="form-control" rows="3"></textarea>
        </div>

        <div class="form-group">
          <label for="message">Message </label>
          <textarea class="form-control" rows="3"></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary">RSVP</button>
      </form>
      </div>
    </div>
    

  return formMarkup;
  }
  render() {
    return (
      <div className="rsvp">
        <h1 className="title" data-aos="fade-in">Kindly Rsvp</h1>
        {this.renderMarkup()}
      </div>
      
    )
  }

}

export default Rsvp;