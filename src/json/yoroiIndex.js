import normalSpecies from './normalSpeciesYoroi'
import fireSpecies from './fireSpeciesYoroi'
import waterSpecies from './waterSpeciesYoroi'
import electricSpecies from './electricSpeciesYoroi'
import leafSpecies from './leafSpeciesYoroi'

import ghostSpecies from './ghostSpecies'
import esperSpecies from './esperSpecies'
import darkSpecies from './darkSpecies'
import fairySpecies from './fairySpeacies'
import iceSpecies from './iceSpecies'
import insectSpecies from './insectSpecies'
import fightingSpecies from './fightingSpecies'
import poisonSpecies from './poisonSpecies'
import groundSpecies from './groundSpecies'
import flyingSpecies from './flyingSpecies'
import rockSpecies from './rockSpecies'
import dragonSpecies from './dragonSpecies'
import steelSpecies from './steelSpecies'

function YoroiPokemon(type) {
  switch(type) {
    case "normal":
      return normalSpecies
    case "fire":
      return fireSpecies
    case "water":
      return waterSpecies
    case "electric":
      return electricSpecies
    case "leaf":
      return leafSpecies
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

export default YoroiPokemon