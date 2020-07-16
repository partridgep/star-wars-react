import React from 'react';

function StarShipList(props) {
    return (
        <div>
            <h1>STARSHIP LIST</h1>

            <h1>{props.starships[0]}</h1>
        </div>
    );
}

export default StarShipList;