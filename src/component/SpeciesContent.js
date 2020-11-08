import React, { Component } from 'react';
import '../css/type-table-layout.css';
import Pokemon from '../json';

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

var sumHP, sumAttack, sumDefense, sumSpecialAttack, sumSpecialDefense, sumSpeed; // 合計
var HPArray, attackArray, defenseArray, specialAttackArray, specialDefenseArray, speedArray;
var HPCenterNum, attackCenterNum, defenseCenterNum, specialAttackCenterNum, specialDefenseCenterNum, speedCenterNum; // 中央値

class SpeciesContent extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.tbodyRef = React.createRef();

    // 初期化
    HPArray = [];
    attackArray = [];
    defenseArray = [];
    specialAttackArray = [];
    specialDefenseArray = [];
    speedArray = [];

    sumHP = 0;
    sumAttack = 0;
    sumDefense = 0;
    sumSpecialAttack = 0;
    sumSpecialDefense = 0;
    sumSpeed = 0;

    HPCenterNum = 0;
    attackCenterNum = 0;
    defenseCenterNum = 0;
    specialAttackCenterNum = 0;
    specialDefenseCenterNum = 0;
    speedCenterNum = 0;

    // それぞれの合計とポケモンのJSON形式のデータを配列へ
    Pokemon(this.props.species).data.map((content, i) => {
      HPArray[i] = content.HP;
      attackArray[i] = content.attack;
      defenseArray[i] = content.defense;
      specialAttackArray[i] = content.special_attack;
      specialDefenseArray[i] = content.special_defense;
      speedArray[i] = content.speed;

      sumHP += content.HP;
      sumAttack += content.attack;
      sumDefense += content.defense;
      sumSpecialAttack += content.special_attack;
      sumSpecialDefense += content.special_defense;
      sumSpeed += content.speed;
    });

    this.centerNum(HPArray, attackArray, defenseArray, specialAttackArray, specialDefenseArray, speedArray);
  }

  tableSort(event) {
    let cellNumber = parseInt(event.target.dataset.cell) - 1;  // data-cellを作った際に配列が0から始まるのを忘れており、めんどくさいから-1しとけばいいでしょと理解するやつは誰もいまい
    let tableHeaderList = this.tableRef.querySelectorAll('th');
    let currentHeader = tableHeaderList[cellNumber];

    Array.from(this.tbodyRef.querySelectorAll('tr:nth-child(n+1)'))
      .sort(comparer(Array.from(currentHeader.parentNode.children).indexOf(currentHeader), this.asc = !this.asc))
      .forEach(tr => this.tbodyRef.appendChild(tr));
  }

  // 中央値の算出
  centerNum(HPArray, attackArray, defenseArray, specialAttackArray, specialDefenseArray, speedArray) {
    const length = Pokemon(this.props.species).data.length;
    const centerIntex = Math.floor(length / 2);

    this.sort(HPArray);
    this.sort(attackArray);
    this.sort(defenseArray);
    this.sort(specialAttackArray);
    this.sort(specialDefenseArray);
    this.sort(speedArray);

    if(length % 2 === 1) {
      HPCenterNum = HPArray[centerIntex ];
      attackCenterNum = attackArray[centerIntex];
      defenseCenterNum = defenseArray[centerIntex];
      specialAttackCenterNum = specialAttackArray[centerIntex];
      specialDefenseCenterNum = specialDefenseArray[centerIntex];
      speedCenterNum = speedArray[centerIntex];
    } else {
      HPCenterNum = Math.round((HPArray[centerIntex] + HPArray[centerIntex - 1]) / 2);
      attackCenterNum = Math.round((attackArray[centerIntex] + attackArray[centerIntex - 1]) / 2);
      defenseCenterNum = Math.round((defenseArray[centerIntex] + defenseArray[centerIntex - 1]) / 2);
      specialAttackCenterNum = Math.round((specialAttackArray[centerIntex] + specialAttackArray[centerIntex - 1]) / 2);
      specialDefenseCenterNum = Math.round((specialDefenseArray[centerIntex] + specialDefenseArray[centerIntex - 1]) / 2);
      speedCenterNum = Math.round((speedArray[centerIntex] + speedArray[centerIntex - 1]) / 2);
    }
  }

  sort(array) {
    array.sort((a, b) => {
      if( a < b ) return -1;
      if( a > b ) return 1;
      return 0;
    });
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
      backgroundColor: '#11dd99'
    };

    const maxSpecialDefenseBackgroundColor = {
      backgroundColor: '#9966ff'
    };

    const maxSpeedBackgroundColor = {
      backgroundColor: '#9999ff'
    };

    const length =  Pokemon(this.props.species).data.length;

    return (
      <div>
        <p>平均と中央値</p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>HP</th>
              <th>こうげき</th>
              <th>ぼうぎょ</th>
              <th>とっこう</th>
              <th>とくぼう</th>
              <th>すばやさ</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>平均値</td>
              <td>{Math.round((sumHP / length) * 10) / 10}</td>
              <td>{Math.round((sumAttack / length) * 10) / 10}</td>
              <td>{Math.round((sumDefense / length) * 10) / 10}</td>
              <td>{Math.round((sumSpecialAttack / length) * 10) / 10}</td>
              <td>{Math.round((sumSpecialDefense / length) * 10) / 10}</td>
              <td>{Math.round((sumSpeed / length) * 10) / 10}</td>
            </tr>

            <tr>
              <td>中央値</td>
              <td>{HPCenterNum}</td>
              <td>{attackCenterNum}</td>
              <td>{defenseCenterNum}</td>
              <td>{specialAttackCenterNum}</td>
              <td>{specialDefenseCenterNum}</td>
              <td>{speedCenterNum}</td>
            </tr>
          </tbody>
        </table>

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
              <th data-cell="8" onClick={this.tableSort.bind(this)}>種族値</th>
            </tr>
          </thead>

          <tbody ref={e => this.tbodyRef = e}>
            {
              Pokemon(this.props.species).data.map((content, i) => {
                let isHPMax = content.max1 === "HP" || content.max2 === "HP";
                let isAttackMax = content.max1 === "attack" || content.max2 === "attack";
                let isDefenseMax = content.max1 === "defense" || content.max2 === "defense";
                let isSpecialAttackMax = content.max1 === "special_attack" || content.max2 === "special_attack";
                let isSpecialDefenseMax = content.max1 === "special_defense" || content.max2 === "special_defense";
                let isSpeedMax = content.max1 === "speed" || content.max2 === "speed";

                return (
                  <tr key={i}>
                    <td>{content.name}</td>
                    <td style={isHPMax ? maxHPBackgroundColor : {}}>{content.HP}</td>
                    <td style={isAttackMax ? maxAttackBackgroundColor : {}}>{content.attack}</td>
                    <td style={isDefenseMax ? maxDefenseBackgroundColor : {}}>{content.defense}</td>
                    <td style={isSpecialAttackMax ? maxSpecialAttackBackgroundColor : {}}>{content.special_attack}</td>
                    <td style={isSpecialDefenseMax ? maxSpecialDefenseBackgroundColor : {}}>{content.special_defense}</td>
                    <td style={isSpeedMax ? maxSpeedBackgroundColor : {}}>{content.speed}</td>
                    <td>{content.HP + content.attack + content.defense + content.special_attack + content.special_defense + content.speed}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default SpeciesContent;