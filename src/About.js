import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class About extends React.Component {
  render() {
    return (
        <div>
          <main className="header">
            <div className="main1">
              <img alt="docplanner-logo" src="https://media.glassdoor.com/sqll/1071394/docplanner-squarelogo-1515684466717.png" /><br/>
              <p className="main11">Making the healthcare experience more human</p>
            </div>
          </main>
          <section>
            <div className="container">
              <div className="row justify-content-around">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p className="p1">We want patients to find the perfect doctor and book
                    an appointment in the most easy way. The patient journey
                    should be enjoyable, and that's why we are always next to them: 
                    to help them find the best possible care. Anytime, anywhere.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p className="p1"> We also help doctors to better manage their practice and 
                    build their online reputation. With our integrated end-to-end solution, 
                    doctors are able not only to improve their online presence, but also to devote 
                    their time to what really matters: their patients.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
  }
}