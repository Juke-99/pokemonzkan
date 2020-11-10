import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import Pokemon from '../json'
import YoroiPokemon from '../json/yoroiIndex'
import KanmuriPokemon from '../json/kanmuriIndex'

function BarChart(props) {
  const [nameArray, setNameArray] = useState([])
  const [HPArray, setHPArray] = useState([])
  const [attackArray, setAttackArray] = useState([])
  const [defenseArray, setDefenseArray] = useState([])
  const [specialAttackArray, setSpecialAttackArray] = useState([])
  const [specialDefenseArray, setSpecialDefenseArray] = useState([])
  const [speedArray, setSpeedArray] = useState([])

  Pokemon(props.species).data.map((content, i) => {
    // setNameArray(nameArray.push(content.name))
    // setNameArray(nameArray => [...nameArray, content.name])
    nameArray[i] = content.name
    HPArray[i] = content.HP
    attackArray[i] = content.attack
    defenseArray[i] = content.defense
    specialAttackArray[i] = content.special_attack
    specialDefenseArray[i] = content.special_defense
    speedArray[i] = content.speed
  })

  if(props.yoroi === 'y') {
    YoroiPokemon(props.species).data.map((content, i) => {
      const gararuPokemonLength = Pokemon(props.species).data.length

      // setNameArray(nameArray.push(content.name))
      // setNameArray(nameArray => [...nameArray, content.name])
      nameArray[i + gararuPokemonLength] = content.name
      HPArray[i + gararuPokemonLength] = content.HP
      attackArray[i + gararuPokemonLength] = content.attack
      defenseArray[i + gararuPokemonLength] = content.defense
      specialAttackArray[i + gararuPokemonLength] = content.special_attack
      specialDefenseArray[i + gararuPokemonLength] = content.special_defense
      speedArray[i + gararuPokemonLength] = content.speed
    })
  }

  if(props.kanmuri === 'y') {
    KanmuriPokemon(props.species).data.map((content, i) => {
      const gararuPokemonLength = Pokemon(props.species).data.length
      const yoroiPokemonLength = YoroiPokemon(props.species).data.length
      const sumLength = gararuPokemonLength + yoroiPokemonLength

      // setNameArray(nameArray.push(content.name))
      // setNameArray(nameArray => [...nameArray, content.name])
      nameArray[i + sumLength] = content.name
      HPArray[i + sumLength] = content.HP
      attackArray[i + sumLength] = content.attack
      defenseArray[i + sumLength] = content.defense
      specialAttackArray[i + sumLength] = content.special_attack
      specialDefenseArray[i + sumLength] = content.special_defense
      speedArray[i + sumLength] = content.speed
    })
  }

  const chartData = {
    labels: nameArray,
    datasets: [
      {
        data: HPArray,
        backgroundColor: '#ddd',
        borderColor: '#fff',
        label: 'HP'
      },
      {
        data: attackArray,
        backgroundColor: '#d33',
        borderColor: '#fff',
        label: 'こうげき'
      },
      {
        data: defenseArray,
        backgroundColor: '#33d',
        borderColor: '#fff',
        label: 'ぼうぎょ'
      },
      {
        data: specialAttackArray,
        backgroundColor: '#1d1',
        borderColor: '#fff',
        label: 'とくこう'
      },
      {
        data: specialDefenseArray,
        backgroundColor: '#d9a',
        borderColor: '#fff',
        label: 'とくぼう'
      },
      {
        data: speedArray,
        backgroundColor: '#da1',
        borderColor: '#fff',
        label: 'すばやさ'
      }
    ]
  }

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: "#fff"
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: "#fff"
        }
      }]
    }
  }

  return(
    <div>
      <Bar data={chartData} options={options}></Bar>
    </div>
  )
}

export default BarChart