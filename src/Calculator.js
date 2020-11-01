import React, { useEffect, useState } from 'react'
import CheckBox from './Checkbox'
import Critical from './json/criticalHit'
import './css/calculator-layout.css'

function Calculator() {
  const [criticalHitRank, setCriticalHitRank] = useState(0)

  useEffect(() => {
    console.log("checkItem: " + criticalHitRank);
  })


  const handleCriticalHitRank = event => {
    const target = event.target

    if(target.checked) {
      setCriticalHitRank(criticalHitRank + parseInt(event.target.value))
    } else {
      setCriticalHitRank(criticalHitRank - parseInt(event.target.value))
    }
  }

  const criticalHitRankCalculator = rankSum => {
    if(rankSum === 1) {
      return "12.5%"
    } else if(rankSum === 2) {
      return "50.0%"
    } else if(rankSum >= 3) {
      return "100.0%"
    } else {
      return "4.17%"
    }
  }

  return (
    <div>
      <div>
        <p className="calc-title">急所ランク</p>
        <CheckBox items={Critical.data} onChange={handleCriticalHitRank}></CheckBox>
        <p className="calc-result">{criticalHitRankCalculator(criticalHitRank)}</p>
      </div>
    </div>
  )
}

export default Calculator