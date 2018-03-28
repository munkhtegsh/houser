import React from 'react';

let House = (props) => {
    return (
        <div className="house">
            <div>
                <p>Property name: {props.name}</p>
                <p>Address: {props.address}</p>
                <p>City: {props.city}</p>
                <p>State: {props.state}</p>
                <p>zip: {props.zip}</p>
            </div>
            <button className='house__button' onClick={() => props.deleteHouse(props.id)}>X</button>
        </div>
    )
}

export default House;