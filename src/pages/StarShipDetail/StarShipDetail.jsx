import React from 'react';
import {Link} from 'react-router-dom';
import './StarShipDetail.css';

//background constants
const DSbackground = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-08.jpg';
const SDestroyerbackground = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-12-1.jpg';
const KyloRenStarDestroyerbackground = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-27.jpg';
const SnokeSDBackground = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-26.jpg'
const MF1background = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-39.jpg';
const MF2background = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-29.jpg';
const MF3background = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-15.jpg';
const MF4background = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-13.jpg';
const XWing1Background = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-11.jpg';
const XWing2Background = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-09.jpg';
const RebelTransportBackground = 'https://cdna.artstation.com/p/assets/images/images/003/469/674/large/darren-tan-gr75coverimage-da.jpg?1474024097';
const corvetteBackground = 'https://i.imgur.com/mGeQDgY.png';
const landingCraftBackground = 'https://i.pinimg.com/originals/9e/2e/81/9e2e811f4fbcde54d5cb8d5c994a5091.jpg';
const YWingBackground = 'https://vignette.wikia.nocookie.net/starwars/images/4/45/BTL-B_Y-wing_BF2.png/revision/latest?cb=20171129235141';
const TIEbackground1 = 'https://cdnb.artstation.com/p/assets/images/images/006/464/129/large/john-seymour-tfax1.jpg?1498772159';
const TIEbackground2 = 'http://fractalsponge.net/wp/wp-content/uploads/2015/02/x1_8.jpg';
const TIEbackground3 = 'http://fractalsponge.net/wp/wp-content/uploads/2015/02/x1_9.jpg'
const TIEbackground4 = 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F11%2Fmsdstwa_ec088-2000.jpg'
const executorBackground1 = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-28.jpg';
const executorBackground2 = 'https://pbs.twimg.com/media/DUAtBG_W4AAw9Fj?format=jpg&name=large';
const executorBackground3 ='https://vignette.wikia.nocookie.net/swfanon/images/d/d9/Executor.jpg/revision/latest?cb=20121125062041';

//arrays of background constants
const starDestroyersBackgrounds = [SDestroyerbackground, KyloRenStarDestroyerbackground, SnokeSDBackground];
const MilleniumFalconBackgrounds = [MF1background, MF2background, MF3background, MF4background];
const XWingBackgrounds = [XWing1Background, XWing2Background];
const TIEbackgrounds = [TIEbackground1, TIEbackground2, TIEbackground3, TIEbackground4];
const executorBackgrounds = [executorBackground1, executorBackground2, executorBackground3];

//function to select correct background
function selBackground(name) {
    let background;
    if (name === 'Death Star') background = DSbackground;
    else if (name === 'Star Destroyer') background = starDestroyersBackgrounds[Math.floor(Math.random()*starDestroyersBackgrounds.length)];
    else if (name === 'Millennium Falcon') background = MilleniumFalconBackgrounds[Math.floor(Math.random()*MilleniumFalconBackgrounds.length)];
    else if (name === 'X-wing') background = XWingBackgrounds[Math.floor(Math.random()*XWingBackgrounds.length)];
    else if (name === 'Rebel transport') background = RebelTransportBackground;
    else if (name === 'CR90 corvette') background = corvetteBackground;
    else if (name === 'Sentinel-class landing craft') background = landingCraftBackground;
    else if (name === 'Y-wing') background = YWingBackground;
    else if (name === 'TIE Advanced x1') background = TIEbackgrounds[Math.floor(Math.random()*TIEbackgrounds.length)];
    else if (name === 'Executor') background = executorBackgrounds[Math.floor(Math.random()*executorBackgrounds.length)];
    return background;
}


function StarShipDetail(props) {
    return (
        <div 
            className='StarShipDetail'
            style={{  
                backgroundImage: `url("${selBackground(props.match.params.id)}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
        >
            <div className='StarShipDetail-info'>
                <h1>{props.match.params.id}</h1>
                <p>Model: {props.starship.model}</p>
                <Link to="/">RETURN TO ALL STARSHIPS</Link>
            </div>
            </div>

    );
}

export default StarShipDetail;