import React, { Component } from 'react';
import SpeciesContent from './component/SpeciesContent';
import './css/type-table-layout.css';

class Species extends Component {
  render() {
    return (
      <div>
        <div className="type-table">
          <h2>ノーマルタイプ</h2>
          <SpeciesContent species={"normal"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>くさタイプ</h2>
          <SpeciesContent species={"leaf"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>みずタイプ</h2>
          <SpeciesContent species={"water"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>ほのおタイプ</h2>
          <SpeciesContent species={"fire"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>ゴーストタイプ</h2>
          <SpeciesContent species={"ghost"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>エスパータイプ</h2>
          <SpeciesContent species={"esper"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>あくタイプ</h2>
          <SpeciesContent species={"dark"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>フェアリータイプ</h2>
          <SpeciesContent species={"fairy"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>こおりタイプ</h2>
          <SpeciesContent species={"ice"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>むしタイプ</h2>
          <SpeciesContent species={"insect"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>でんきタイプ</h2>
          <SpeciesContent species={"electric"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>かくとうタイプ</h2>
          <SpeciesContent species={"fighting"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>どくタイプ</h2>
          <SpeciesContent species={"poison"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>じめんタイプ</h2>
          <SpeciesContent species={"ground"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>ひこうタイプ</h2>
          <SpeciesContent species={"flying"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>いわタイプ</h2>
          <SpeciesContent species={"rock"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>ドラゴンタイプ</h2>
          <SpeciesContent species={"dragon"}></SpeciesContent>
        </div>

        <div className="type-table">
          <h2>はがねタイプ</h2>
          <SpeciesContent species={"steel"}></SpeciesContent>
        </div>
      </div>
    );
  }
}

export default Species;