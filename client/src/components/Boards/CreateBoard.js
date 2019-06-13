import React, { Component } from 'react';
import { connect } from 'react-redux';
import { boardFormView } from '../../actions/profileActions'
import { addBoard } from '../../actions/boardActions'
import '../../css/boards.css'

class CreateBoard extends Component {
    state={
        use_id: parseInt(`${this.props.userDetails.id}`),
        title: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    createBoard = e => {
        e.preventDefault();
        const { use_id, title } = this.state;
        const board = {
          use_id: use_id,
          title: title
        }
        this.props.addBoard(board);
        this.setState({
            title: ''
        })
        this.props.boardFormView();
    }

    render() {
        return(
            <div className='createBoard'>
                <button onClick={this.props.boardFormView}>Esc</button>
                <form onSubmit={this.createBoard} className='createBoard'>
                    <input
                    name='title'
                    classname='title'
                    type='text'
                    placeholder='board title'
                    value={this.state.title}
                    onChange={this.onChange}
                    />
                    <button type='submit'>Add Board</button>
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
        addBoard: (board) => dispatch(addBoard(board)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CreateBoard)

