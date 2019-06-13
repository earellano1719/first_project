import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserPins } from '../../actions/pinsActions'
import '../../css/pins.css'

class UserPins extends Component {
    state={
        user_id: parseInt(`${this.props.userDetails.id}`),
        username: `${this.props.userDetails.username}`
    }

    componentDidMount = () => {
        this.getUserPins();
    }

    getUserPins = () => {
        let username = this.state.username
        this.props.getUserPins(username)
    }


    render() {
        let pins = this.props.userPins.map((pin) => {
            return (
                <div className='pinContainer' key={pin.id}>
                    <a href={'/pins/' + pin.id}>
                        <img className='pin' src={pin.url} alt=''/>
                    </a>
                </div>
            )
        })


        return(
            <div className='allPins'>
            {pins}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    userDetails: state.login.userDetails,
    userPins: state.pins.userPins,
})
  
const mapDispatchToProps = (dispatch) => {
    return {
        getUserPins: (pin) => dispatch(getUserPins(pin)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserPins)