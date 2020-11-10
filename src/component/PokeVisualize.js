import React from 'react';
import BarChart from './BarChart';

function PokeVisualize(props) {
  return (
    <div>
      <BarChart species={props.species} yoroi={props.yoroi} kanmuri={props.kanmuri}></BarChart>
    </div>
  )
}

export default PokeVisualize;