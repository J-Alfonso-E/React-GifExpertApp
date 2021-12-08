import React, { useState } from "react"
import { AgregarCategoria } from "./Componentes/AgregarCategoria";
import { GifGrid } from "./Componentes/GifGrid";


const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Halo Infinite']);
    

    /*const AgregarCategorias = () => {
        setCatergorias([...categorias, '9 Years of Shadows']); // Operador Spread  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax

        //Segunda forma de Regresar el valor

        //setCatergorias(cats => [...cats, '9 Years of Shadows']);
    }*/
    return (
        <>
            <h2>Gif Expert App</h2>
            <AgregarCategoria  EnviarCategoria={setCategorias}/> {/* Envio de una funcion al componente */}
            <hr />

            

            <ol>
                {
                categorias.map(Catg => (
                    <GifGrid
                    key = {Catg}
                    categoria = {Catg}
                    />
                ))
            }
            </ol>
        </>
    );
}


export default GifExpertApp;