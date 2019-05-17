import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ENavbar from './ENavbar'
import About from './About'
import Cards from './Cards'
import Svgs from './Svgs'
import FluidPlanner from './FluidPlanner';
import Advert from './Advert'
import Footer from './Footer'
import List from './List'

export class App extends React.Component {
  
  render() {
    return (
      <div className="body">
        <ENavbar/>
        <About/>
        <Cards/>
        <Svgs/>
        <FluidPlanner/>
        <Advert/>
        <br/><br/>
        <List/>
        <br/><br/>
        <Footer/>
      </div>
    );
  }
}

export default App;
