import React, { useRef } from 'react';
import '../css/checkbox-button-layout.css';

function Checkbox(props) {
  const ulRef = useRef()

  const handleAllUnChecked = () => {
    const checkboxList = ulRef.current.querySelectorAll('li input')
    
    checkboxList.forEach(checkbox => {
      checkbox.checked = false
    })
  }

  return (
    <div className="container">
      <ul className="ks-cboxtags" ref={ulRef}>
        {
          props.items.map((item, i) => {
            return <li key={i}><input type="checkbox" id={"checkbox" + i} onChange={props.onChange} value={item.value} /><label htmlFor={"checkbox" + i}>{item.name}</label></li>
          })
        }
      </ul>

      <button className="bubbly-button" onClick={e => {props.onReset(e); handleAllUnChecked();}}>リセット</button>
    </div>
  )
}

export default Checkbox;