import React from 'react'
import { BoardImgs } from './BoardImgs';


export const BoardsContainer = (props) => {
    const { title, boardId, pins } = props

    let imgDisplay = pins.map((img) => {
        if(img.board_id === boardId)
        return <BoardImgs imgSrc={img.url} />
    })
    return(
        <div className='boardContainer'>

            <div className='imgContainer'>
                {imgDisplay}
            </div>

            <div>
                <p className='titleContainer'>{title}</p>
                
            </div>
        </div>
    )
}