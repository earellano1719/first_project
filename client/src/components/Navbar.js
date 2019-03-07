import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/loginActions'
import { NavLink } from 'react-router-dom'
import Auth from '../utils/Auth';
import '../styles.css'


const Navbar = ({ isLoggedIn, logoutUser }) => {
    let username = isLoggedIn ? Auth.getToken() : null;

    return(
        <>
        {isLoggedIn ? 
        <nav>
            <NavLink to={'/'}><img className='logo' src="http://backgroundcheckall.com/wp-content/uploads/2018/10/pinterest-logo-png-transparent-background-2.png" alt=''/></NavLink>
            
            <input className='search' type='text' placeholder='🔍 Search' />         
            <NavLink to={'/'}>Home</NavLink>         
            <NavLink to={`/${username}`} >{username}</NavLink>
            <button onClick={logoutUser}>Logout</button>  
        </nav>
        :
        null
        }
        </>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.login.isLoggedIn
})
  
const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)


