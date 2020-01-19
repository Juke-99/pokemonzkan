import React, { Component } from 'react';
import './css/type-table-layout.css';
import leafSpecies from './json/leafSpecies';
import waterSpecies from './json/waterSpecies';
import PokeVisualize from './PokeVisualize';

class Visualize extends Component {
  render() {
    return (
      <div>
        <PokeVisualize species={leafSpecies}></PokeVisualize>
        <PokeVisualize species={waterSpecies}></PokeVisualize>
      </div>
    );
  }
}

export default Visualize;