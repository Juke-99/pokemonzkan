import React, { useState } from 'react';
import './css/visualize.css'
import PokeVisualize from './component/PokeVisualize';

function Visualize() {
  const [showNav, setShowNav] = useState(false)

  const showNavigationMenu = () => {
    setShowNav(!showNav)
  }

  return (
    <div>
      <div>
        <div className={showNav ? 'nav-toggle expanded' : 'nav-toggle'} onClick={showNavigationMenu}>
          <div className='nav-toggle-bar'></div>
        </div>

        <nav className={showNav ? 'nav expanded' : 'nav'}>
          <ul>
            <li className='menu'><a className='link' href='#normal'>ノーマルタイプ</a></li>
            <li className='menu'><a className='link' href='#fire'>ほのおタイプ</a></li>
            <li className='menu'><a className='link' href='#water'>みずタイプ</a></li>
            <li className='menu'><a className='link' href='#leaf'>くさタイプ</a></li>
            <li className='menu'><a className='link' href='#electric'>でんきタイプ</a></li>
            <li className='menu'><a className='link' href='#ice'>こおりタイプ</a></li>
            <li className='menu'><a className='link' href='#fighting'>かくとうタイプ</a></li>
            <li className='menu'><a className='link' href='#poison'>どくタイプ</a></li>
            <li className='menu'><a className='link' href='#ground'>じめんタイプ</a></li>
            <li className='menu'><a className='link' href='#flying'>ひこうタイプ</a></li>
            <li className='menu'><a className='link' href='#esper'>エスパータイプ</a></li>
            <li className='menu'><a className='link' href='#insect'>むしタイプ</a></li>
            <li className='menu'><a className='link' href='#rock'>いわタイプ</a></li>
            <li className='menu'><a className='link' href='#ghost'>ゴーストタイプ</a></li>
            <li className='menu'><a className='link' href='#dragon'>ドラゴンタイプ</a></li>
            <li className='menu'><a className='link' href='#dark'>あくタイプ</a></li>
            <li className='menu'><a className='link' href='#steel'>はがねタイプ</a></li>
            <li className='menu'><a className='link' href='#fairy'>フェアリータイプ</a></li>
          </ul>
        </nav>
      </div>

      <div id='normal' className="graph">
        <h1>ノーマルタイプ</h1>
        <PokeVisualize species={'normal'}></PokeVisualize>
      </div>

      <div id='fire' className="graph">
        <h1>ほのおタイプ</h1>
        <PokeVisualize species={'fire'}></PokeVisualize>
      </div>

      <div id='water' className="graph">
        <h1>みずタイプ</h1>
        <PokeVisualize species={'water'}></PokeVisualize>
      </div>

      <div id='leaf' className="graph">
        <h1>くさタイプ</h1>
        <PokeVisualize species={'leaf'}></PokeVisualize>
      </div>

      <div id='electric' className="graph">
        <h1>でんきタイプ</h1>
        <PokeVisualize species={'electric'}></PokeVisualize>
      </div>

      <div id='ice' className="graph">
        <h1>こおりタイプ</h1>
        <PokeVisualize species={'ice'}></PokeVisualize>
      </div>

      <div id='fighting' className="graph">
        <h1>かくとうタイプ</h1>
        <PokeVisualize species={'fighting'}></PokeVisualize>
      </div>

      <div id='poison' className="graph">
        <h1>どくタイプ</h1>
        <PokeVisualize species={'poison'}></PokeVisualize>
      </div>

      <div id='ground' className="graph">
        <h1>じめんタイプ</h1>
        <PokeVisualize species={'ground'}></PokeVisualize>
      </div>

      <div id='flying' className="graph">
        <h1>ひこうタイプ</h1>
        <PokeVisualize species={'flying'}></PokeVisualize>
      </div>

      <div id='esper' className="graph">
        <h1>エスパータイプ</h1>
        <PokeVisualize species={'esper'}></PokeVisualize>
      </div>

      <div id='insect' className="graph">
        <h1>むしタイプ</h1>
        <PokeVisualize species={'insect'}></PokeVisualize>
      </div>

      <div id='rock' className="graph">
        <h1>いわタイプ</h1>
        <PokeVisualize species={'rock'}></PokeVisualize>
      </div>

      <div id='ghost' className="graph">
        <h1>ゴーストタイプ</h1>
        <PokeVisualize species={'ghost'}></PokeVisualize>
      </div>

      <div id='dragon' className="graph">
        <h1>ドラゴンタイプ</h1>
        <PokeVisualize species={'dragon'}></PokeVisualize>
      </div>

      <div id='dark' className="graph">
        <h1>あくタイプ</h1>
        <PokeVisualize species={'dark'}></PokeVisualize>
      </div>

      <div id='steel' className="graph">
        <h1>はがねタイプ</h1>
        <PokeVisualize species={'steel'}></PokeVisualize>
      </div>

      <div id='fairy' className="graph">
        <h1>フェアリータイプ</h1>
        <PokeVisualize species={'fairy'}></PokeVisualize>
      </div>
    </div>
  )
}

export default Visualize;