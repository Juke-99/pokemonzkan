import React, { Component } from 'react';
import './css/type-table-layout.css';

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

class SpeciesContent extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.tbodyRef = React.createRef();
  }

  tableSort(event) {
    let cellNumber = parseInt(event.target.dataset.cell) - 1;  // data-cellを作った際に配列が0から始まるのを忘れており、めんどくさいから-1しとけばいいでしょと理解するやつは誰もいまい
    let tableHeaderList = this.tableRef.querySelectorAll('th');
    let currentHeader = tableHeaderList[cellNumber];

    Array.from(this.tbodyRef.querySelectorAll('tr:nth-child(n+1)'))
      .sort(comparer(Array.from(currentHeader.parentNode.children).indexOf(currentHeader), this.asc = !this.asc))
      .forEach(tr => this.tbodyRef.appendChild(tr));
  }
  
  render() {
    const maxHPBackgroundColor = {
      backgroundColor: '#ff7755'
    };

    const maxAttackBackgroundColor = {
      backgroundColor: '#ff5599'
    };

    const maxDefenseBackgroundColor = {
      backgroundColor: '#4477ff'
    };

    const maxSpecialAttackBackgroundColor = {
      backgroundColor: '#11ff99'
    };

    const maxSpecialDefenseBackgroundColor = {
      backgroundColor: '#9966ff'
    };

    const maxSpeedBackgroundColor = {
      backgroundColor: '#9999ff'
    };

    return (
      <table ref={e => this.tableRef = e}>
        <thead>
          <tr>
            <th data-cell="1" onClick={this.tableSort.bind(this)}>ポケモン名</th>
            <th data-cell="2" onClick={this.tableSort.bind(this)}>HP</th>
            <th data-cell="3" onClick={this.tableSort.bind(this)}>こうげき</th>
            <th data-cell="4" onClick={this.tableSort.bind(this)}>ぼうぎょ</th>
            <th data-cell="5" onClick={this.tableSort.bind(this)}>とっこう</th>
            <th data-cell="6" onClick={this.tableSort.bind(this)}>とくぼう</th>
            <th data-cell="7" onClick={this.tableSort.bind(this)}>すばやさ</th>
          </tr>
        </thead>

        <tbody ref={e => this.tbodyRef = e}>
          {
           this.props.species.data.map((content, i)=> {
            switch(content.max) {
              case "HP":
                return (
                  <tr key={i}>
                    <td>{content.name}</td>
                    <td style={maxHPBackgroundColor}>{content.HP}</td>
                    <td>{content.attack}</td>
                    <td>{content.defense}</td>
                    <td>{content.special_attack}</td>
                    <td>{content.special_defense}</td>
                    <td>{content.speed}</td>
                  </tr>
                );
              case "attack":
                return (
                  <tr key={i}>
                    <td>{content.name}</td>
                    <td>{content.HP}</td>
                    <td style={maxAttackBackgroundColor}>{content.attack}</td>
                    <td>{content.defense}</td>
                    <td>{content.special_attack}</td>
                    <td>{content.special_defense}</td>
                    <td>{content.speed}</td>
                  </tr>
                );
              case "defense":
                return (
                  <tr key={i}>
                    <td>{content.name}</td>
                    <td>{content.HP}</td>
                    <td>{content.attack}</td>
                    <td style={maxDefenseBackgroundColor}>{content.defense}</td>
                    <td>{content.special_attack}</td>
                    <td>{content.special_defense}</td>
                    <td>{content.speed}</td>
                  </tr>
                );
              case "special_attack":
                return (
                  <tr key={i}>
                    <td>{content.name}</td>
                    <td>{content.HP}</td>
                    <td>{content.attack}</td>
                    <td>{content.defense}</td>
                    <td style={maxSpecialAttackBackgroundColor}>{content.special_attack}</td>
                    <td>{content.special_defense}</td>
                    <td>{content.speed}</td>
                  </tr>
                );
              case "special_defense":
                return (
                  <tr key={i}>
                    <td>{content.name}</td>
                    <td>{content.HP}</td>
                    <td>{content.attack}</td>
                    <td>{content.defense}</td>
                    <td>{content.special_attack}</td>
                    <td style={maxSpecialDefenseBackgroundColor}>{content.special_defense}</td>
                    <td>{content.speed}</td>
                  </tr>
                );
              case "speed":
                return (
                  <tr key={i}>
                    <td>{content.name}</td>
                    <td>{content.HP}</td>
                    <td>{content.attack}</td>
                    <td>{content.defense}</td>
                    <td>{content.special_attack}</td>
                    <td>{content.special_defense}</td>
                    <td style={maxSpeedBackgroundColor}>{content.speed}</td>
                  </tr>
                );
              default:
                return (
                  <tr key={i}>
                    <td>{content.name}</td>
                    <td>{content.HP}</td>
                    <td>{content.attack}</td>
                    <td>{content.defense}</td>
                    <td>{content.special_attack}</td>
                    <td>{content.special_defense}</td>
                    <td>{content.speed}</td>
                  </tr>
                );
              }
            })
          }
        </tbody>
      </table>
    );
  }
}

export default SpeciesContent;