import React from 'react';
import './css/checkbox-button-layout.css';

function Checkbox(props) {
  return (
    <div className="container">
      <ul className="ks-cboxtags">
        {
          props.items.map((item, i) => {
            return <li key={i}><input type="checkbox" id={"checkbox" + i} onChange={props.onChange} value={item.value} /><label htmlFor={"checkbox" + i}>{item.name}</label></li>
          })
        }
      </ul>
    </div>
  )
}

export default Checkbox;