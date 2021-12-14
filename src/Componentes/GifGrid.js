import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { ObtGif } from "../Complementos/GifFetch";
import { GifGridItem } from "./GifGridItem";

import PropTypes from 'prop-types';

export const GifGrid = ( {categoria}) => {

    const {data, loading} = useFetchGifs( categoria);

    return (
        <>
        <h3>{categoria}</h3>

        {loading && 'Cargando' } {/* Operador Ternario donde si es true hace lo primero en caso contrario no hace nada */}
        <div className='card-grid animate__bounceIn'>
            
            
                {data.map( img => (
                    <GifGridItem key={img.id} {...img} />
                ))
                }
        </div>
        </>
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired
}