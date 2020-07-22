import React from 'react';
import {Link} from 'react-router-dom';
import './StarShipDetail.css';


function StarShipDetail(props) {

    let pilotList = [];
    for (var pilot of props.pilots) {
        pilotList.push(pilot.name)
    };

    const pilotString = pilotList.join(', ');

    return (
        <div 
            className='StarShipDetail'
            style={{  
                backgroundImage: `url("${props.shipBackground}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
        >
            <div className='StarShipDetail-info'>
                <h1>{props.match.params.id}</h1>
                <p>Model: {props.starship.model}</p>
                <p>Manufacturer: {props.starship.manufacturer}</p>
                <p>Cost: {props.starship.cost_in_credits} credits</p>
                <p>Max Atmosphering Speed: {props.starship.max_atmosphering_speed}</p>
                <p>Pilots: {props.pilots.length > 1 ? pilotString : 'No pilots'}</p>
                <Link to="/">RETURN TO ALL STARSHIPS</Link>
            </div>
            </div>

    );
}

export default StarShipDetail;