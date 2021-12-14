import React from "react";
import PropTypes from 'prop-types';


export const GifGridItem = ({title, url}) => {
    console.log({title, url});

    return (
        <div className='card animate__fadeInDown'>
            <img className='card animate__bounceIn' src={url} alt={title}></img>
            <p className='card'>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}