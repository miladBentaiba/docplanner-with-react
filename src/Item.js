import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default class Item extends React.Component {
  
  render() {
    return (        
        <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="graf1sec7">
            <div >
                <img alt="" className="imgsec7" src="https://www.docplanner.com/images/warsaw.png" width="100%"/>
            </div>
            <div className="par2">
                <a href="/Warsaw/">Warsaw </a>
                <button type="button" className="btn btn-primary btn-sm">See openning</button>
            </div>   
            </div>
        </div>
    );
  }
}