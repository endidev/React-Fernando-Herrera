// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types'; 

//fc 
const PrimeraApp = ( {saludo, subtitulo = 'Soy un subtitulo'} ) => {

    // const saludo = {
    //     nombre: 'Adrian',
    //     edad: 32
    // }
    
   

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify(saludo, null, 3) } </pre> */}
            <p> {subtitulo} </p>
        </>
    )
}

// lo declaramos con mayuscula, pero aca la usamos 
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;