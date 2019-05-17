import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default class Cards extends React.Component {
  render() {
    return (
        <section className="section2 container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="cot1">
                    <h6>For patients</h6>
                    <p className="psect2">Find a doctor, book a visit and solve any health-related doubt</p><br/>
                    <div className="list"> 
                      <div className="list1">
                        <select >
                          <option value="choose country">choose country</option>
                          <option value="">Argentina</option>
                          <option value="">Australia</option>
                          <option value="">Brazil</option>
                        </select>
                      </div>
                      <img className="img1" alt="computer" src="https://www.docplanner.com/img/screen-marketplace@2x.png" width="75%" height="37%"/>
                    </div>   
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="cot2">
                <h6>For doctors</h6>
                <p className="psect2">Save time managing visits and cut no-shows by half</p>  
                <br/>
                <img className="img2" alt="computer" src="https://www.docplanner.com/img/screen-saas@2x.png" width="75%" height="37%"/>
              </div>
            </div>
          </div>
        </section>      
    );
  }
}