import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserPins } from '../../actions/pinsActions'
import { getBoardsPins } from '../../actions/boardActions'
import '../../css/pins.css'

class UserPins extends Component {
    state={
        user_id: parseInt(`${this.props.userDetails.id}`),
        username: `${this.props.userDetails.username}`
    }

    componentDidMount = () => {
        getBoardsPins()
    }

    getBoardsPins = () => {
        this.props.getBoardsPins(this.state.username)
    }

    render() {
        return(
            <h1>User boards</h1>
        )
    }

}

const mapStateToProps = state => ({
    userDetails: state.login.userDetails,
})
  
const mapDispatchToProps = (dispatch) => {
    return {
        getUserPins: (pin) => dispatch(getUserPins(pin)),
        getBoardsPins: (username) => dispatch(getBoardsPins(username)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserPins)