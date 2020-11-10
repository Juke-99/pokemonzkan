import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Species from './Species';
import BestPokemonList from './BestPokemonList';
import Visualize from './Visualize';
import Calculator from './Calculator';
import AllPokemonVisualize from './AllPokemonVisualize';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/species" component={Species} />
        <Route path="/best-pokemon-list" component={BestPokemonList} />
        <Route path="/calculator" component={Calculator}></Route>
        <Route path="/visualize" component={Visualize} />
        <Route path="/all-visualize" component={AllPokemonVisualize} />
      </Switch>

      <hr />

      <p>
        <Link to="/">トップ</Link>
      </p>

      <p>
        <Link to="/species">ポケモンのいろいろなデータ</Link>
      </p>

      <p>
        <Link to="/visualize">種族値グラフ（ガラル図鑑のみ）</Link>
      </p>

      <p>
        <Link to="/all-visualize">種族値グラフ（ガラル図鑑のみ + ヨロイ島図鑑 + カンムリ雪原図鑑）</Link>
      </p>

      <p>
        <Link to="/best-pokemon-list">ベストポケモン</Link>
      </p>

      <p>
        <Link to="/calculator">計算機</Link>
      </p>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
