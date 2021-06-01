import React, { useEffect, useRef } from 'react';

const Cockpit = (props) => {

    const toggleButtonRef = useRef(null);
    

    useEffect(() => {
        // console.log('[Cockpit.js] useEffect');
        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleButtonRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    return (
        <div>
            <h1>{props.title}</h1>
            <button ref={toggleButtonRef} style={props.style} onClick={props.clicked}>Toggle View</button>
        </div>
    );
};

export default React.memo(Cockpit);