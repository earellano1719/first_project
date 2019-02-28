import React from 'react';
import '../css/singlePin.css'

export const SinglePin = (props) => {
    const { pins, goBack } = props

    let singlePin = pins.find((pin) => {
        return pin.id === Number(props.match.params.pin_id)
    })

    let pinInfo = pins.map((pin) => {
        if (pin.id === singlePin.id)
        return  <div key={pin.id} className='pinDisplay'>
                    <div className='topBar'></div>

                    <img className='pinImage' src={pin.url} alt='' />
                    <hr />
                    <div className='pinUserInfo'>

                        <div>
                            <img className='pinDispProfileImage' src={pin.pic_url} />
                        </div>
                        <div className='pinUserDetails'>
                            <p className='pinName'>{pin.full_name}</p>
                            <p className='pinCaption'>{pin.caption}</p>
                        </div>

                    </div>
                </div>
    })

    let remainingPins = pins.map((pin) => {
        if (pin.id !== singlePin.id)
        return <div key={pin.id}>
                    <a href={' http:' + '/pins/' + pin.id}>
                    <img className='pin' src={pin.url} alt=''/>
                    </a>
               </div>
    })

    if (!singlePin && !pinInfo && !remainingPins){return null}

    return(
        <>
        <div className='page'>
            <div className='singlePinDisplay'>
                <div className='buttonDisp'>
                    <button className='goBack' onClick={goBack}>{'< BACK'}</button>
                </div>
                {pinInfo}
            </div> 
            <div className='allPins'>
                {remainingPins}
            </div>

        </div>    
        </>
    )
}