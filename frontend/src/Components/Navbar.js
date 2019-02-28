import React from 'react';
import { NavLink } from 'react-router-dom'

export const NavBar = (props) => { 
    const { isLoggedIn, username } = props
    return(
        <>
        
        {isLoggedIn ?       
        <nav>
            <NavLink to={'/'}><img className='logo' src="http://backgroundcheckall.com/wp-content/uploads/2018/10/pinterest-logo-png-transparent-background-2.png" alt=''/></NavLink>
            
            <input className='search' type='text' placeholder='🔍 Search' />         
            <NavLink to={'/'}>Home</NavLink>         
            <NavLink to={'/users/' + 2} >{username}</NavLink>                
        </nav>
        : null
        }
        </>
    )
}