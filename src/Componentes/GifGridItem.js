import React from "react";

export const GifGridItem = ({title, url}) => {
    console.log({title, url});

    return (
        <div className='card'>
            <img className='card animate__bounceIn' src={url} alt={title}></img>
            <p className='card'>{title}</p>
        </div>
    )
}