import normalSpecies from './normalSpeciesKanmuri'
import fireSpecies from './fireSpeciesKanmuri'
import waterSpecies from './waterSpeciesKanmuri'
import electricSpecies from './electricSpeciesKanmuri'
import leafSpecies from './leafSpeciesKanmuri'
import iceSpecies from './iceSpeciesKanmuri'
import fightingSpecies from './fightingSpeciesKanmuri'
import poisonSpecies from './poisonSpeciesKanmuri'
import groundSpecies from './groundSpeciesKanmuri'
import flyingSpecies from './flyingSpeciesKanmuri'
import esperSpecies from './esperSpeciesKanmuri'
import insectSpecies from './insectSpeciesKanmuri'
import rockSpecies from './rockSpeciesKanmuri'
import ghostSpecies from './ghostSpeciesKanmuri'
import dragonSpecies from './dragonSpeciesKanmuri'
import darkSpecies from './darkSpeciesKanmuri'
import steelSpecies from './steelSpeciesKanmuri'
import fairySpecies from './fairySpeciesKanmuri'

function KanmuriPokemon(type) {
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

export default KanmuriPokemon