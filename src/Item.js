import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default class Item extends React.Component {
  
  render() {
      const {item} = this.props
    return (        
        <div className="col-lg-4 col-md-6 col-sm-12">
            <br/>
            <div className="graf1sec7">
            <div >
                <img alt="" src={item.img} width="100%"/>
            </div>
            <div className="par2">
                <a href={`/${item.place}/`}>{item.place} </a>
                <button type="button" className="btn btn-primary btn-sm">See openning</button>
            </div>   
            </div>
        </div>
    );
  }
}