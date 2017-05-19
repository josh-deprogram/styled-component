import React, { Component } from 'react';
import Tile from './components/tile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="App-header">
          <h2>7-West 'styled' component</h2>
        </div>

        { /* Heres a custom tile */ } 
        <Tile 
            title="Home and Away"
            image="tile.jpg"
        />

      </div>
    );
  }
}

export default App;
