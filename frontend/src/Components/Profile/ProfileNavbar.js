import React from 'react';
import { NavLink } from 'react-router-dom'
import '../css/profile.css'

export const ProfileNavbar = () => {
    return(
        <>
        <nav  className='profileNavbar'>
            <NavLink to={'/boards'}>Boards</NavLink>         
            <NavLink to='/users/:user_id'>Pins</NavLink> 
               
        </nav>
        </>
    )
}