import React, { Component } from 'react';
import { connect } from 'react-redux';
import { boardFormView } from '../../actions/profileActions'
import '../../css/boards.css'

class CreateBoard extends Component {
    state={
        user_id:'',
        title: ''
    }

    render() {
        return(
            <div className='createBoard'>
                <button onClick={this.props.boardFormView}>Esc</button>
                <form className='createBoard'>
                    <input
                    classname='pinInput'
                    type='text'
                    placeholder='board title'
                    value={this.state.title}
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userDetails: state.login.userDetails,
    boardForm: state.profile.boardForm,
})
  
const mapDispatchToProps = (dispatch) => {
    return {
        boardFormView: () => dispatch(boardFormView()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CreateBoard)

