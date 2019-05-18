import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Item from './Item'

export default class List extends React.Component {

    items = [
        {img:"https://www.docplanner.com/images/warsaw.png", place:"Warsaw"},
        {img:"https://www.docplanner.com/images/barcelona.png", place:"Barcelon"},
        {img:"https://www.docplanner.com/images/istanbul.png", place:"Istanbul"},
        {img:"https://www.docplanner.com/images/rome.png", place:"Rome"},
        {img:"https://www.docplanner.com/images/mexico-city.png", place:"Mexico City"},
        {img:"https://www.docplanner.com/images/curitiba.png", place:"Curitiba"}
    ]

  render() {
    return (
        <div className="container">
            <div className="row">
                {this.items.map((el, index)=><Item item={el} key={index} /> )}
            </div>
        </div>
     
    );
  }
}