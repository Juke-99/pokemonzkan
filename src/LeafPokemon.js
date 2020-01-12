import React, { Component } from 'react';

class LeafPokemon extends Component {
  render() {
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td rowSpan="2">ほのお</td>
              <td>じめん</td>
              <td>リーフィア</td>
            </tr>
            <tr>
              <td>みず</td>
              <td>ルンパッパ</td>
            </tr>

            <tr>
              <td>こおり</td>
              <td>はがね</td>
              <td>ナットレイ</td>
            </tr>

            <tr>
              <td rowSpan="2">どく</td>
              <td>じめん</td>
              <td>リーフィア</td>
            </tr>
            <tr>
              <td>エスパー</td>
              <td>ルンパッパ</td>
            </tr>

            <tr>
              <td>ひこう</td>
              <td>でんき</td>
              <td>ロトム</td>
            </tr>

            <tr>
              <td>むし</td>
              <td>ひこう</td>
              <td>エルフーン</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LeafPokemon;