import React from 'react';
import {Link} from 'react-router-dom';
import './StarShipList.css';

function StarShipList(props) {

    const shipLinks = props.starships.map(ship => (
        <Link 
            className='StarShipList-button btn btn-default' 
            to={'/'+ship.name} 
            key={ship.name}
            onClick={() => props.handleStarshipSelection(ship)}
        >
        {ship.name}
        </Link>
    )
        )

    return (
        <div className='StarShipList'>
            <h1 className='StarShipList-title' >STARSHIP LIST</h1>
            {props.starships && props.starships.length > 0 ? shipLinks : 'loading...'}
        </div>
    );
}

export default StarShipList;