import React, { Component } from 'react';
import bride from '../photos/bride-headshot.jpg';
import groom from '../photos/groom-headshot.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


class Couple extends Component {
  render() {

    AOS.init();
    return(
      <div>
        <h1 className="title" data-aos="fade-in">The Couple</h1>
        <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
          <div className="headshot-wrapper" data-aos="fade-right">
            <img className="headshot" src={groom} alt="groom" />
            <div className="overlay"><p>Jorge</p></div>
          </div>
          
          <div className="headshot-description" data-aos="fade-in">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum
          </div>
          </div>

          <div className="col-sm-12 col-md-6">
          <div className="headshot-wrapper" data-aos="fade-left">
            <img className="headshot" src={bride} alt="bride" />
            <div className="overlay">
              <p>Anfisa</p>
            </div>
          </div>
          <div className="headshot-description" data-aos="fade-in">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum
          </div>   
          </div>

       
        </div>
      </div>
      </div>
    )
  }
}

export default Couple;