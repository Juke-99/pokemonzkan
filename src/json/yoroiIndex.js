import normalSpecies from './normalSpeciesYoroi'
import fireSpecies from './fireSpeciesYoroi'
import waterSpecies from './waterSpeciesYoroi'
import electricSpecies from './electricSpeciesYoroi'
import leafSpecies from './leafSpeciesYoroi'
import iceSpecies from './iceSpeciesYoroi'
import fightingSpecies from './fightingSpeciesYoroi'
import poisonSpecies from './poisonSpeciesYoroi'
import groundSpecies from './groundSpeciesYoroi'
import flyingSpecies from './flyingSpeciesYoroi'
import esperSpecies from './esperSpeciesYoroi'
import insectSpecies from './insectSpeciesYoroi'
import rockSpecies from './rockSpeciesYoroi'
import ghostSpecies from './ghostSpeciesYoroi'
import dragonSpecies from './dragonSpeciesYoroi'
import darkSpecies from './darkSpeciesYoroi'
import steelSpecies from './steelSpeciesYoroi'
import fairySpecies from './fairySpeciesYoroi'

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
    case "ice":
      return iceSpecies
    case "fighting":
      return fightingSpecies
    case "poison":
      return poisonSpecies
    case "ground":
      return groundSpecies
    case "flying":
      return flyingSpecies
    case "esper":
      return esperSpecies
    case "insect":
      return insectSpecies
    case "rock":
      return rockSpecies
    case "ghost":
      return ghostSpecies
    case "dragon":
      return dragonSpecies
    case "dark":
      return darkSpecies
    case "steel":
      return steelSpecies
    case "fairy":
      return fairySpecies
  }
}

export default YoroiPokemon