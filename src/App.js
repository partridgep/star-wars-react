import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { TransitionGroup, Transition } from "react-transition-group";
import { play } from './timelines'

import StarShipDetail from './pages/StarShipDetail/StarShipDetail';
import StarShipList from './pages/StarShipList/StarShipList';

import { getAllStarships } from './services/sw-api';


//background constants
const DSbackground1 = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-08.jpg';
const DSbackground2 = 'https://www.itl.cat/pngfile/big/32-323685_rogue-one-death-star-wallpaper-star-wars-rogue.jpg';
const DSbackground3 = 'https://www.popsci.com/sites/popsci.com/files/images/2016/12/deathstar.jpg';
const DSbackground4 = 'https://comicvine1.cbsistatic.com/uploads/original/11133/111330408/6668962-0525674605-43470.png';
const SDestroyerbackground = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-12-1.jpg';
const KyloRenStarDestroyerbackground = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-27.jpg';
const SnokeSDBackground = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-26.jpg'
const MF1background = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-29.jpg';
const MF2background = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-15.jpg';
const MF3background = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-13.jpg';
const XWing1Background = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-11.jpg';
const XWing2Background = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-09.jpg';
const RebelTransportBackground = 'https://cdna.artstation.com/p/assets/images/images/003/469/674/large/darren-tan-gr75coverimage-da.jpg?1474024097';
const corvetteBackground = 'https://i.imgur.com/mGeQDgY.png';
const landingCraftBackground1 = 'https://i.pinimg.com/originals/9e/2e/81/9e2e811f4fbcde54d5cb8d5c994a5091.jpg';
const landingCraftBackground2 = 'https://1.bp.blogspot.com/-Z7ph7BycutU/W5lMwRcZ6TI/AAAAAAAAKnQ/bQWvx_kUqLsrr9fn9SsyHaP478GOFh8vwCLcBGAs/s1600/02%2BAnkunft_des_Imperators.jpg';
const landingCraftBackground3 = 'https://pbs.twimg.com/media/DFe3MTVVoAA3WJ7.jpg:large';
const YWingBackground = 'https://vignette.wikia.nocookie.net/starwars/images/4/45/BTL-B_Y-wing_BF2.png/revision/latest?cb=20171129235141';
const TIEbackground1 = 'https://cdnb.artstation.com/p/assets/images/images/006/464/129/large/john-seymour-tfax1.jpg?1498772159';
const TIEbackground2 = 'http://fractalsponge.net/wp/wp-content/uploads/2015/02/x1_8.jpg';
const TIEbackground3 = 'http://fractalsponge.net/wp/wp-content/uploads/2015/02/x1_9.jpg'
const TIEbackground4 = 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F11%2Fmsdstwa_ec088-2000.jpg'
const executorBackground1 = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-28.jpg';
const executorBackground2 = 'https://pbs.twimg.com/media/DUAtBG_W4AAw9Fj?format=jpg&name=large';
const executorBackground3 ='https://vignette.wikia.nocookie.net/swfanon/images/d/d9/Executor.jpg/revision/latest?cb=20121125062041';

//arrays of background constants
const DeathStarBackgrounds = [DSbackground1, DSbackground2, DSbackground3, DSbackground4];
const starDestroyersBackgrounds = [SDestroyerbackground, KyloRenStarDestroyerbackground, SnokeSDBackground];
const MilleniumFalconBackgrounds = [MF1background, MF2background, MF3background];
const XWingBackgrounds = [XWing1Background, XWing2Background];
const TIEbackgrounds = [TIEbackground1, TIEbackground2, TIEbackground3, TIEbackground4];
const executorBackgrounds = [executorBackground1, executorBackground2, executorBackground3];
const landingCraftBackgrounds = [landingCraftBackground1, landingCraftBackground2, landingCraftBackground3];

//function to select correct background
function selBackground(name) {
    if (name === 'Death Star') return DeathStarBackgrounds[Math.floor(Math.random()*DeathStarBackgrounds.length)];
    else if (name === 'Star Destroyer') return starDestroyersBackgrounds[Math.floor(Math.random()*starDestroyersBackgrounds.length)];
    else if (name === 'Millennium Falcon') return MilleniumFalconBackgrounds[Math.floor(Math.random()*MilleniumFalconBackgrounds.length)];
    else if (name === 'X-wing') return XWingBackgrounds[Math.floor(Math.random()*XWingBackgrounds.length)];
    else if (name === 'Rebel transport') return RebelTransportBackground;
    else if (name === 'CR90 corvette') return corvetteBackground;
    else if (name === 'Sentinel-class landing craft') return landingCraftBackgrounds[Math.floor(Math.random()*landingCraftBackgrounds.length)];
    else if (name === 'Y-wing') return YWingBackground;
    else if (name === 'TIE Advanced x1') return TIEbackgrounds[Math.floor(Math.random()*TIEbackgrounds.length)];
    else if (name === 'Executor') return executorBackgrounds[Math.floor(Math.random()*executorBackgrounds.length)];
}

class App extends Component {

  state = {
    starships: [],
    selStarship: {},
    shipBackground: ''
  }

  handleStarshipSelection = (starship) => {
    this.setState({ selStarship: starship, shipBackground: selBackground(starship.name) })
  }

  async componentDidMount() {
    const { results } = await getAllStarships();
    this.setState({ starships : results });
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
           REACT STAR WARS
        </header>
        <Route render={({ location }) => {
          const { pathname, key } = location
        
          return (
            <TransitionGroup>
            <Transition
              key={key}
              appear={true}
              onEnter={(node, appears) => play(pathname, node, appears)}
              timeout={{enter: 750, exit: 0}}
            >
              <Switch location={location}>
                <Route exact path="/" render={ props =>
                  <StarShipList 
                    starships={this.state.starships} 
                    handleStarshipSelection={this.handleStarshipSelection} 
                    {...props}
                  />
                }/>
                <Route exact path="/:id" render={ props =>
                  <StarShipDetail starship={this.state.selStarship} shipBackground={this.state.shipBackground} {...props}/>
                }/>
              </Switch>
            </Transition>
          </TransitionGroup>
          )}
        }
        />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
