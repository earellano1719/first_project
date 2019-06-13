import React, { Component } from 'react';
import { connect } from 'react-redux';
import { boardsView, pinsView, pinFormView, boardFormView } from '../../actions/profileActions'
import { userInfo } from '../../actions/loginActions'
import '../../css/profile.css'
import Boards from '../Boards/Boards'
import UserPins from '../Pins/UserPins'
import PinBuilder from '../Pins/PinBuilder'
import CreateBoard from '../Boards/CreateBoard'


class Profile extends Component{

    componentDidMount = () => {
        this.getUserInfo()
    }

    getUserInfo = (user) => {
        this.props.userInfo(this.props.match.url)
    }
    
    render(){
        const { userDetails, profileView, pinForm, boardForm } = this.props;


        let privateUserDisplay = <div className='profile'>
                                    <div className='names'>
                                        <div className='profileActions'>
                                            <img className='addPin' src='https://borderbuddy.com/wp-content/uploads/2018/02/plus-sign-transparent-background-3.png' onClick={this.props.pinFormView} ></img>
                                            <img className='addBoard' src='https://pngimage.net/wp-content/uploads/2018/06/new-message-png-6.png' onClick={this.props.boardFormView}></img>
                                        </div>
                                        <div className={ pinForm || boardForm ? 'popUp' : null}>
                                            {pinForm ? <PinBuilder /> : null}
                                            {boardForm ? <CreateBoard /> : null}
                                        </div>
                                        {pinForm || boardForm ? null:
                                        <>
                                        <h1 className='fullname'>{userDetails.full_name}</h1>
                                        <p className='username' >Username: {userDetails.username}</p>
                                        </>
                                        }
                                    </div>
                                    {pinForm || boardForm ?
                                    null:
                                    userDetails.pic_url ? <img className='profilePic' src={userDetails.pic_url}></img>: 
                                    <div className={ pinForm || boardForm ? 'profileNameHide' : 'profileName'}>
                                    {`${userDetails.full_name}`.charAt(0)}
                                    </div>
                                    }
                                </div>
        
        let userDisplay = <div className='profile'>
                            <div className='names'>
                                <h1 className='fullname'>{userDetails.full_name}</h1>
                                <p className='username' >Username: {userDetails.username}</p>
                            </div>
                            {userDetails.pic_url ? <img className='profilePic' src={userDetails.pic_url}></img>: 
                            <div className='profileName'>
                            {`${userDetails.full_name}`.charAt(0)}
                            </div>}
                          </div>

        

        return(
            <div className={pinForm || boardForm ? 'formActive' : null}>
                {this.props.isLoggedIn ? privateUserDisplay : userDisplay}
                {pinForm || boardForm ? null: 
                    <div className='buttonHolder'>
                        <button 
                        className={profileView ? 'switched' : 'switches'} 
                        onClick={this.props.boardsView}>
                        Boards
                        </button>
                        <button 
                        className={profileView ? 'switches' : 'switched'} 
                        onClick={this.props.pinsView}>
                        Pins
                        </button>
                    </div>
                }
                {pinForm || boardForm ? null :
                    <div>
                        {profileView ? <Boards /> : <UserPins />}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.login.isLoggedIn,
    userDetails: state.login.userDetails,
    profileView: state.profile.profileView,
    pinForm: state.profile.pinForm,
    boardForm: state.profile.boardForm,
  })
  
  const mapDispatchToProps = (dispatch) => {
    return {
      boardsView: () => dispatch(boardsView()),
      pinsView: () => dispatch(pinsView()),
      pinFormView: () => dispatch(pinFormView()),
      boardFormView: () => dispatch(boardFormView()),
      userInfo: (user) => dispatch(userInfo(user)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (Profile)