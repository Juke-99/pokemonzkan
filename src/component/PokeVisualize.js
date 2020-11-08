import React from 'react';
import BarChart from './BarChart';

function PokeVisualize(props) {
  return (
    <div>
      <BarChart species={props.species}></BarChart>
    </div>
  )
}

export default PokeVisualize;