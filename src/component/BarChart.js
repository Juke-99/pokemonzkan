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