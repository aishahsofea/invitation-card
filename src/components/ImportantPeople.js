import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import anime from 'animejs/lib/anime.es.js';
import $ from 'jQuery/dist/jquery.min.js';
import bridesmaid from '../photos/bridesmaid.png';
import bestman from '../photos/bestman.png';


class ImportantPeople extends Component {
  constructor() {
    super();
    this.animate = this.animate.bind(this);
  }

  animate() {
    // anime({
    //   targets: '.haha',
    //   translateX: 270,
    //   delay: anime.stagger(100) // increase delay by 100ms for each elements.
    // });

    console.log('amazing')
  }


  componentDidMount() {
    $(window).scroll(() => {
      const elementScrolled = elem => {
        let docViewTop = $(window).scrollTop();
        let docViewBottom = docViewTop + $(window).height();
        let elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
      }

      if (elementScrolled('.imp-ppl-headshots')) {
        anime.timeline()
          .add({
            targets: '.imp-ppl-headshots .name-and-headshot',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: function(el, i) {
              return 50 * i;
            }
          }).add({
            targets: '.ml6',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          });
      }
    })
  }


  render() {
    
    AOS.init();

    return(
      <div>
        <h1 className="title" data-aos="fade-in">Important   People</h1>
        
        <div className="container">
         <div className="row" data-aos="fade-down">
          <div className="col-md">
            <h3>Bestmen</h3>
            <div className="row imp-ppl-headshots">
              <div className="name-and-headshot">
                <img className=" imp-ppl-headshot" src={bestman} alt="bestman"/>
                <p>Kyrie</p>
              </div>
              <div className="name-and-headshot">
                <img className=" imp-ppl-headshot" src={bestman} alt="bestman"/>
                <p>Kyrie</p>
              </div>
              <div className="name-and-headshot">
                <img className=" imp-ppl-headshot" src={bestman} alt="bestman"/>
                <p>Kyrie</p>
              </div>
              <div className="name-and-headshot">
                <img className=" imp-ppl-headshot" src={bestman} alt="bestman"/>
                <p>Kyrie</p>
              </div>
           
            </div>
          </div>
          <div className="col-md">
            <h3>Bridesmaids</h3>
            <div className="row imp-ppl-headshots">
              <div className="col-sm-6 col-sm-offset-6 col-md-3 col-md-offset-3 name-and-headshot">
                <img className=" imp-ppl-headshot" src={bridesmaid} alt="bridesmaid"/>
                Kyraa
              </div>
              <div className="col-sm-6 col-sm-offset-6 col-md-3 col-md-offset-3 name-and-headshot">
                <img className=" imp-ppl-headshot" src={bridesmaid} alt="bridesmaid"/>
                <p>Kyraa</p>
              </div>
              <div className="col-sm-6 col-sm-offset-6 col-md-3 col-md-offset-3 name-and-headshot">
                <img className=" imp-ppl-headshot" src={bridesmaid} alt="bridesmaid"/>
                <p>Kyraa</p>
              </div>
              <div className="col-sm-6 col-sm-offset-6 col-md-3 col-md-offset-3 name-and-headshot">
                <img className=" imp-ppl-headshot" src={bridesmaid} alt="bridesmaid"/>
                <p>Kyraa</p>
              </div>
            </div>
          </div>
         </div>
        </div>

        <h1>wtv</h1>
        <h1>wtv</h1>
        <h1>wtv</h1>
        <h1>wtv</h1>
        <h1>wtv</h1>
        <h1>wtv</h1>

      </div>
    )
  }
}

export default ImportantPeople;