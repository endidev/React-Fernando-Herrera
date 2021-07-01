import React, { useRef } from 'react'

import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    //TODO: ver como reacciona mas de un ref     

    const handleClick = () => {
        //va al final de nuestro input
        //document.querySelector('input').focus();
        //selecciona todo el input y se queda al final
        // document.querySelector('input').select();
        inputRef.current.focus();
        console.log(inputRef)
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>


            <input 
                ref={ inputRef }
                className='form-control'
                placeholder='Su nombre'
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}
