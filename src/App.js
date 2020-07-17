import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import StarShipDetail from './pages/StarShipDetail/StarShipDetail';
import StarShipList from './pages/StarShipList/StarShipList';

import { getAllStarships } from './services/sw-api';

class App extends Component {

  state = {
    starships: [],
    selStarship: {}
  }

  handleStarshipSelection = (starship) => {
    this.setState({ selStarship: starship })
  }

  async componentDidMount() {
    const { results } = await getAllStarships();
    this.setState({ starships : results });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
           REACT STAR WARS
        </header>
        <Switch>
          <Route exact path="/" render={ props =>
            <StarShipList 
              starships={this.state.starships} 
              handleStarshipSelection={this.handleStarshipSelection} 
              {...props}
            />
          }/>
          <Route exact path="/:id" render={ props =>
            <StarShipDetail starship={this.state.selStarship} {...props}/>
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
