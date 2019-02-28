import React from 'react';
import '../css/boards.css'
import { BoardsContainer } from './BoardsContainer';

export const Boards = (props) => {
    const { boards, pins } = props;
 
    let boardContainer = boards.map((board) => {
        return (
            <div>
                <a href={'/boards/' + board.id}>
                    <BoardsContainer pins={pins} title={board.title} boardId={board.id} />
                </a>

            </div>
        )
    })
        
    return(
        <div className='boardDisp'>
            {boardContainer}
        </div>
    )
}