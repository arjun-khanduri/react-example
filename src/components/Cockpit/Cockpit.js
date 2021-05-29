import React, { useEffect } from 'react';

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    return (
        <div>
            <h1>{props.title}</h1>
            <button style={props.style} onClick={props.clicked}>Toggle View</button>
        </div>
    );
};

export default Cockpit;