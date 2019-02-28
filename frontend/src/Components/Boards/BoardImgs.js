import React from 'react'

export const BoardImgs = (props) => {
    const { imgSrc } = props
    return (
            <img className='boardImages' src={imgSrc} />
    )
}