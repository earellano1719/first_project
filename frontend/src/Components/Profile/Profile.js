import React from 'react'
import '../css/profile.css'
import '../css/pins.css'
import { Pins } from '../Pins/Pins';
import { Boards } from '../Boards/Boards';
let loading = require('../../Assets/images/redlaoding.gif')


export const Profile = (props) => {
    const { users, 
            pins, 
            boards,
            profileStart,
            handleProfileStartPins,
            handleProfileStartBoards } = props
    if(!users.length) 
            {return <img src={loading} />}

     let singleUser = users.find((user) => {
        return user.id === Number(props.match.params.user_id)
    })

    
    
    let userInfo = users.map((user) => {
        if (user.id === singleUser.id)
        return <div className='profile'>
                    <div className='names'>
                        <h1 className='fullname'>{user.full_name}</h1>
                        <p className='username' >Username: {user.username}</p>
                    </div>
                <img className='profilePic' src={user.pic_url}></img>
               </div>
    })
    
    let userPins = pins.filter((pin) => {
        return (pin.user_id === singleUser.id)
    }) 

    let userBoards = boards.filter((board) => {
        return (board.user_id === singleUser.id)
    })

    
    if (!singleUser || !userInfo || !userPins || !userBoards){return null}

    return(
        <>
        {userInfo}
        <p className='buttonHolder'>
            <button 
            className={profileStart ? 'switched' : 'switches'} 
            onClick={handleProfileStartBoards}>
            Boards
            </button>
            <button 
            className={profileStart ? 'switches' : 'switched' ? 'switched2' : 'switched2'} 
            onClick={handleProfileStartPins}>
            Pins
            </button>
            <h1>Chis is the fucking best coder I know!. periodt</h1>
        </p>
        {profileStart ?  <Boards boards={userBoards} pins={userPins} /> : <Pins pins={userPins} />}
        </>
    )
}