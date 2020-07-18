import React from 'react';
import {Link} from 'react-router-dom';
import './StarShipDetail.css';


function StarShipDetail(props) {

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
                <Link to="/">RETURN TO ALL STARSHIPS</Link>
            </div>
            </div>

    );
}

export default StarShipDetail;