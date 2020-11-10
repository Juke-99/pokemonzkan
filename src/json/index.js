import leafSpecies from './leafSpecies';
import waterSpecies from './waterSpecies';
import fireSpecies from './fireSpecies';
import ghostSpecies from './ghostSpecies';
import esperSpecies from './esperSpecies';
import darkSpecies from './darkSpecies';
import fairySpecies from './fairySpecies';
import iceSpecies from './iceSpecies';
import insectSpecies from './insectSpecies';
import normalSpecies from './normalSpecies';
import electricSpecies from './electricSpecies';
import fightingSpecies from './fightingSpecies';
import poisonSpecies from './poisonSpecies';
import groundSpecies from './groundSpecies';
import flyingSpecies from './flyingSpecies';
import rockSpecies from './rockSpecies';
import dragonSpecies from './dragonSpecies';
import steelSpecies from './steelSpecies';

function Pokemon(type) {
  switch(type) {
    case "leaf":
      return leafSpecies
    case "water":
      return waterSpecies
    case "fire":
      return fireSpecies
    case "ghost":
      return ghostSpecies
    case "esper":
      return esperSpecies
    case "dark":
      return darkSpecies
    case "fairy":
      return fairySpecies
    case "ice":
      return iceSpecies
    case "insect":
      return insectSpecies
    case "normal":
      return normalSpecies
    case "electric":
      return electricSpecies
    case "fighting":
      return fightingSpecies
    case "poison":
      return poisonSpecies
    case "ground":
      return groundSpecies
    case "flying":
      return flyingSpecies
    case "rock":
      return rockSpecies
    case "dragon":
      return dragonSpecies
    case "steel":
      return steelSpecies
  }
}

export default Pokemon