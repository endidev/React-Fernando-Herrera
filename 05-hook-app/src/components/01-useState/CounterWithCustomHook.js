import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(15);

    return (
        <>
            <h1> Counter with Hook: {state} </h1>   
            <hr />

            <button onClick={ () => increment(3)} className="btn">+1</button>
            <button onClick={ reset } className="btn">Reset</button>
            <button onClick={ () => decrement(2)} className="btn">-1</button>
        </>
    )
}
