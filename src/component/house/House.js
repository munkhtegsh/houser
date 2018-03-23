import React from 'react';

let House = (props) => {
    return (
        <div>
            <p>Property name: {props.name}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>zip: {props.zip}</p>
            <button onClick={() => props.deleteHouse(props.id)}>Delete</button>
        </div>
    )
}

export default House;