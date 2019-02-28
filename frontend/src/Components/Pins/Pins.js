import React from 'react';
import '../css/pins.css'

export const Pins = (props) => {
    const { pins } = props;
    if(!pins.length){return null}
    let pinsDisp = pins.map((pin) => {
        return (
                <div className='pinContainer' key={pin.id}>
                    <a href={'/pins/' + pin.id}>
                        <img className='pin' src={pin.url} alt=''/>
                    </a>
                </div>
        )
    })
    return (
            <div className='allPins'>
                {pinsDisp}
            </div>
            )
}