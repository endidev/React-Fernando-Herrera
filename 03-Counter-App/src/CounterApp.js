import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( {value = 100} ) => {

    const [ counter, setCounter ] = useState( value );
    
    //handleAdd
    const handleAdd = () => {
        // setCounter( counter +1);
        //En caso que solo tengamos el set
        setCounter( (c) => c + 1)
    }

    const handleReset = () => setCounter( value );

    const handleRem = () => setCounter( counter - 1);

    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter }</h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleRem }> -1 </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;