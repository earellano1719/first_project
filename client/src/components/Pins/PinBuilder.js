import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pinFormView } from '../../actions/profileActions'
import { addPin, getUserPins } from '../../actions/pinsActions'
import '../../css/pins.css'

class PinBuilder extends Component {
    state={
        user_id: parseInt(`${this.props.userDetails.id}`),
        board_id: parseInt('5'),
        url: '',
        caption: ''
    }

    componentDidUpdate = () => {
        this.props.getUserPins(`${this.props.userDetails.username}`);
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    postPin = e => {
        e.preventDefault();
        const { user_id, board_id, url, caption } = this.state;
        const pin = {
          user_id: user_id,
          board_id: board_id,
          url: url,
          caption: caption
        }
        this.props.addPin(pin);
        this.setState({
            url: '',
            caption: ''
        })
        this.props.pinFormView();
    }

    render() {
        return(
            <div className='pinBuilder'>
                <button onClick={this.props.pinFormView}>Esc</button>
                <form onSubmit={this.postPin} className='pinBuilder'>
                    <select>

                    </select>
                    <input
                    name='url'
                    classname='pinInput'
                    type='text'
                    placeholder='enter pic url'
                    value={this.state.url}
                    onChange={this.onChange}
                    />
                    <input
                    name='caption'
                    classname='pinInput'
                    placeholder='say something about this post'
                    type='text'
                    value={this.state.caption}
                    onChange={this.onChange}
                    />
                    <button type='submit'>Add Pin</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userDetails: state.login.userDetails,
    formView: state.profile.formView,
})
  
const mapDispatchToProps = (dispatch) => {
    return {
        pinFormView: () => dispatch(pinFormView()),
        addPin: (pin) => dispatch(addPin(pin)),
        getUserPins: () => dispatch(getUserPins()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PinBuilder)

