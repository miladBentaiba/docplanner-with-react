import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Item from './Item'

export class App extends React.Component {
  
  render() {
    return (
      <div className="body">
        <Item/>
      </div>
    );
  }
}

export default App;
