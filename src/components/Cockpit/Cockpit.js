import React from 'react';

const Cockpit = (props) => {
    return (
        <div>
            <h1>Hi! Welcome to React</h1>
            <button style={props.style} onClick={props.clicked}>Toggle View</button>
        </div>
    );
};

export default Cockpit;