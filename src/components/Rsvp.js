import React, { Component } from 'react';

class Rsvp extends Component {
  render() {
    return (
      <div className="container form-wrapper">
        <form>
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
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
         
          <button type="submit" class="btn btn-primary">RSVP</button>
        </form>
      
      </div>
    )
  }

}

export default Rsvp;