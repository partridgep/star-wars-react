import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import StarShipDetail from './pages/StarShipDetail/StarShipDetail';
import StarShipList from './pages/StarShipList/StarShipList';

import { getAllStarships } from './services/sw-api';

class App extends Component {

  state = {
    starships: []
  }

  async componentDidMount() {
    const starships = await getAllStarships();
    console.log(starships);
    this.setState({ starships });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
           REACT STAR WARS
        </header>
        <Switch>
          <Route exact path="/" render={ props =>
            <StarShipList starships={this.state.starships} {...props}/>
          }/>
          <Route exact path="/:id" render={ props =>
            <StarShipDetail {...props}/>
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
