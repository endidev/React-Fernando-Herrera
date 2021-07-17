import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  

    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect( () => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>

            <blockquote className="blockquote text-center"> 
                <p 
                    className="mb-0"
                    ref={pTag}
                >{quote}
                </p><br/>
            </blockquote>
            <pre>
                { JSON.stringify( boxSize, null, 3) }
            </pre>

            <button 
                className="btn btn-primary text-center" 
                onClick={increment}
            >
                Siguiente Quote
            </button>

        </div>

    )
}
