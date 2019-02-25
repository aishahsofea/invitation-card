import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';
import $ from 'jQuery/dist/jquery.min.js';
import bridesmaid from '../photos/bridesmaid.png';
import bestman from '../photos/bestman.png';


class ImportantPeople extends Component {
  constructor() {
    super();
    this.renderHeadshots = this.renderHeadshots.bind(this);
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

  renderHeadshots(role, name) {
    let headShotMarkup =
    <div className="col-sm-6 name-and-headshot">
      <img className=" imp-ppl-headshot" src={role} alt={`${role}`}/>
      <p>{name}</p>
    </div>
    let markup = 
    <div className="row imp-ppl-headshots">
      {headShotMarkup}
      {headShotMarkup}
      {headShotMarkup}
      {headShotMarkup}
   
    </div>

    return markup;
  }


  render() {
    return(
      <div>
        <h1 className="title" data-aos="fade-in">Important   People</h1>
        
        <div className="container">
         <div className="row" data-aos="fade-down">
          <div className="col-md">
            <h3 className="role-title">Bestmen</h3>
            {this.renderHeadshots(bestman, 'Kyrie')}
          </div>
          <div className="col-md">
            <h3 className="role-title">Bridesmaids</h3>
            {this.renderHeadshots(bridesmaid, 'Kyraa')}
          </div>
         </div>
        </div>

      </div>
    )
  }
}

export default ImportantPeople;