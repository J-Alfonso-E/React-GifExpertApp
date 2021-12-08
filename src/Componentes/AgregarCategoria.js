import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AgregarCategoria = ({EnviarCategoria}) => { //Se recibe la funcion desde GifExpertApp

    const [ValorEntrada, SetValor] = useState('');

    const CambioValor = (e) => {
        SetValor(e.target.value);
    }

    const EnvioCategoria = (e) => {
        e.preventDefault();

        if(ValorEntrada.trim().length > 2){
            EnviarCategoria(cats => [ValorEntrada, ...cats,]); //Cuando se recibe una funcion de Hook el Estado puede ser accedido de esta manera y agregar la nueva categoria
            SetValor('');
        }

        
    }

    return (
        <form onSubmit={EnvioCategoria}>
            <h2>Agregar Categoria</h2>
                <input
                type='text'
                value = {ValorEntrada}
                onChange={CambioValor}
                >
                </input>
        </form>
    )
};

AgregarCategoria.propTypes = {
    EnviarCategoria : PropTypes.func.isRequired
}