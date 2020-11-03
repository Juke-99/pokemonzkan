import React, { useEffect, useState } from 'react'
import CheckBox from './Checkbox'
import Critical from './json/criticalHit'
import './css/calculator-layout.css'

function Calculator() {
  const [criticalHitRank, setCriticalHitRank] = useState(0)
  // const [criticalHitCheckboxState, setCriticalHitCheckboxState] = useState([])

  const handleCriticalHitRank = event => {
    const target = event.target

    if(target.checked) {
      setCriticalHitRank(criticalHitRank + parseInt(target.value))
      // criticalHitCheckboxState.push({id: target.id, checked: target.checked})
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

  // const handleCriticalHitResetRank = event => {
  //   resetButtonAnimation(event)
  // }

  return (
    <div>
      <div>
        <p className="calc-title">急所ランク</p>
        <CheckBox items={Critical.data} onChange={handleCriticalHitRank}></CheckBox>
        {/* <button className="bubbly-button" onClick={handleCriticalHitResetRank}>リセット</button> */}
        <p className="calc-result">{criticalHitRankCalculator(criticalHitRank)}</p>
      </div>

      <div>
        <p className="calc-title">ランク補正</p>
        <CheckBox items={Critical.data} onChange={handleCriticalHitRank}></CheckBox>
        <p className="calc-result">{criticalHitRankCalculator(criticalHitRank)}</p>
      </div>
    </div>
  )
}

export default Calculator