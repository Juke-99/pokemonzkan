import React, { Component } from 'react';
import './css/type-table-layout.css';
import SpeciesContent from './SpeciesContent.js';
import leafSpecies from './json/leafSpecies';
import waterSpecies from './json/waterSpecies';
import fireSpecies from './json/fireSpecies';
import ghostSpecies from './json/ghostSpecies';
import esperSpecies from './json/esperSpecies';
import darkSpecies from './json/darkSpecies';
import fairySpecies from './json/fairySpeacies';
import iceSpecies from './json/iceSpecies';
import insectSpecies from './json/insectSpecies';

class Species extends Component {
  render() {
    return (
      <div>
        <SpeciesContent species={leafSpecies}></SpeciesContent>
        <SpeciesContent species={waterSpecies}></SpeciesContent>
        <SpeciesContent species={fireSpecies}></SpeciesContent>
        <SpeciesContent species={ghostSpecies}></SpeciesContent>
        <SpeciesContent species={esperSpecies}></SpeciesContent>
        <SpeciesContent species={darkSpecies}></SpeciesContent>
        <SpeciesContent species={fairySpecies}></SpeciesContent>
        <SpeciesContent species={iceSpecies}></SpeciesContent>
        <SpeciesContent species={insectSpecies}></SpeciesContent>
      </div>
    );
  }
}

export default Species;