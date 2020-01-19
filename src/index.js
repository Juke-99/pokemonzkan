import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Species from './Species';
import LeafPokemon from './LeafPokemon';
import Visualize from './Visualize';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/species" component={Species} />
        <Route path="/leaf-pokemon" component={LeafPokemon} />
        {/* <Route path="/visualize" component={Visualize} /> */}
      </Switch>

      <hr />

      <p>
        <Link to="/">トップ</Link>
      </p>

      <p>
        <Link to="/species">ポケモンのいろいろなデータ</Link>
      </p>

      {/* <p>
        <Link to="/visualize">グラフ見えるよ</Link>
      </p> */}

      <p>
        <Link to="/leaf-pokemon">くさ縛りでの対策</Link>
      </p>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
