import React, { useState } from 'react'
import CheckBox from './component/Checkbox'
import Critical from './json/criticalHit'
import './css/calculator-layout.css'

function Calculator() {
  const [criticalHitRank, setCriticalHitRank] = useState(0)

  const handleCriticalHitRank = event => {
    const target = event.target

    if(target.checked) {
      setCriticalHitRank(criticalHitRank + parseInt(target.value))
    } else {
      setCriticalHitRank(criticalHitRank - parseInt(target.value))
    }
  }

  const resetButtonAnimation = event => {
    const target = event.target

    event.preventDefault();
    target.classList.remove('animate');
    target.classList.add('animate');

    setTimeout(() => {
      target.classList.remove('animate');
    }, 700)
  }

  const handleReset = event => {
    resetButtonAnimation(event)
    setCriticalHitRank(0)
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
        <p className="calc-title">急所ランク</p>
        <CheckBox items={Critical.data} onChange={handleCriticalHitRank} onReset={handleReset}></CheckBox>
        <p className="calc-result">{criticalHitRankCalculator(criticalHitRank)}</p>
      </div>

      <div>
        <p className="calc-title">技威力計算</p>
      </div>
    </div>
  )
}

export default Calculator