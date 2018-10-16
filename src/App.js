import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Home from './components/Game/Home';
import StartGame from './components/Game/StartGame';
import { Switch, Route , Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/start-game' component={StartGame} />
        <Route render={() => <Redirect to='/home' />} />
      </Switch>
    );
  }
}

export default App;
