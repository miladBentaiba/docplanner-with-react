import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ENavbar from './ENavbar'
import About from './About'
import Card from './Card'

export class App extends React.Component {
  render() {
    return (
      <div className="body">
        <ENavbar/>
        <About/>
        <Card/>
      </div>
    );
  }
}

export default App;
