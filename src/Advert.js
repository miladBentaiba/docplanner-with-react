import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default class Advert extends React.Component {
  
  render() {
    return (
      <div className="body">
        <section className="s5">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <p className="ps5">Improve the lives of millions. Change yours forever</p>  
            </div>
          </div>
        </section>
        <section className="s6 container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <p className="ps6">More than 500 team mates share our same vision, goals and passion.
                With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic,
                Mexico City, Colombia and Curitiba, our search for great talent never stops.
              </p> 
            </div>
          </div>
        </section>
      </div>
    );
  }
}