import React from 'react';
import './css/visualize.css'
import PokeVisualize from './component/PokeVisualize';

function Visualize() {
  return (
    <div>
      <div className="graph">
        <h1>ノーマルタイプ</h1>
        <PokeVisualize species={'normal'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>ほのおタイプ</h1>
        <PokeVisualize species={'fire'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>みずタイプ</h1>
        <PokeVisualize species={'water'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>くさタイプ</h1>
        <PokeVisualize species={'leaf'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>でんきタイプ</h1>
        <PokeVisualize species={'electric'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>こおりタイプ</h1>
        <PokeVisualize species={'ice'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>かくとうタイプ</h1>
        <PokeVisualize species={'fighting'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>どくタイプ</h1>
        <PokeVisualize species={'poison'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>じめんタイプ</h1>
        <PokeVisualize species={'ground'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>ひこうタイプ</h1>
        <PokeVisualize species={'flying'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>エスパータイプ</h1>
        <PokeVisualize species={'esper'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>むしタイプ</h1>
        <PokeVisualize species={'insect'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>いわタイプ</h1>
        <PokeVisualize species={'rock'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>ゴーストタイプ</h1>
        <PokeVisualize species={'ghost'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>ドラゴンタイプ</h1>
        <PokeVisualize species={'dragon'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>あくタイプ</h1>
        <PokeVisualize species={'dark'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>はがねタイプ</h1>
        <PokeVisualize species={'steel'}></PokeVisualize>
      </div>

      <div className="graph">
        <h1>フェアリータイプ</h1>
        <PokeVisualize species={'fairy'}></PokeVisualize>
      </div>
    </div>
  )
}

export default Visualize;