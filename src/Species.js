import React, { Component } from 'react';
import './css/type-table-layout.css';
import SpeciesContent from './SpeciesContent.js';
import leafSpecies from './json/leafSpecies';
import waterSpecies from './json/waterSpecies';
import fireSpecies from './json/fireSpecies';

class Species extends Component {
  render() {
    return (
      <div>
        <SpeciesContent species={leafSpecies}></SpeciesContent>
        <SpeciesContent species={waterSpecies}></SpeciesContent>
        <SpeciesContent species={fireSpecies}></SpeciesContent>
      </div>
    );
  }
}

export default Species;