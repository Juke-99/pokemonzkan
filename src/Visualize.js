import React, { Component } from 'react';
import './css/type-table-layout.css';
import leafSpecies from './json/leafSpecies';
import waterSpecies from './json/waterSpecies';
import PokeVisualize from './component/PokeVisualize';

class Visualize extends Component {
  render() {
    return (
      <div>
        <PokeVisualize species={'normal'}></PokeVisualize>
        <PokeVisualize species={'fire'}></PokeVisualize>
      </div>
    );
  }
}

export default Visualize;