import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import Pokemon from '../json'

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

  const chartData = {
    labels: nameArray,
    datasets: [
      {
        data: HPArray,
        backgroundColor: '#1af',
        borderColor: '#fff',
        label: 'HP'
      },
      {
        data: attackArray,
        backgroundColor: '#afa',
        borderColor: '#fff',
        label: 'attack'
      },
      {
        data: defenseArray,
        backgroundColor: '#2ff',
        borderColor: '#fff',
        label: 'defense'
      },
      {
        data: specialAttackArray,
        backgroundColor: '#f81',
        borderColor: '#fff',
        label: 'specialAttack'
      },
      {
        data: specialDefenseArray,
        backgroundColor: '#33f',
        borderColor: '#fff',
        label: 'specialDefense'
      },
      {
        data: speedArray,
        backgroundColor: '#a9f',
        borderColor: '#fff',
        label: 'speed'
      }
    ]
  }

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
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