import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default class FluidPlanner extends React.Component {
  
  render() {
    return (
      <div className="body">
        <section className="sec4 container-fluid">
          <div className="container">
            <div className="row justify-content-around parent">
                <div className="col-lg-6 "><br/><br/>
                    <p className="p3"> The world's <br/>biggest healthcare platform</p>
                    <p className="p4"> We work from 6 offices all over the world, bringing Docplanner<br/> Group to life in almost 20 countries.</p> 
                </div>
              <div className="col-lg-3">
                <div className="col-lg-12">
                  <div className="graf1 rounded">
                    <img alt="" src="https://www.docplanner.com/img/flag.png"/>
                    <p>Leader in 10 countries</p>
                    <p>Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina, and Chile</p>
                  </div>
                  <div className="graf2 rounded">
                    <img alt="" src="https://www.docplanner.com/img/flag.png"/>
                    <p>30 million unique patients</p>
                    <p>visit us every month</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className="col-lg-12">
                  <div className="graf3 rounded">
                    <img alt="" src="https://www.docplanner.com/img/flag.png"/>
                    <p>1 million appointments </p>
                    <p>booked last month</p>
                  </div>
                  <div className="graf4 rounded">
                  <img alt="" src="https://www.docplanner.com/img/flag.png"/>
                    <p>2 million active doctors </p>
                    <p>trust in our solutions</p>          
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}