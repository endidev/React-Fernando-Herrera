import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })

    const { name, email } = formState;

    //el array al final va para que se ejecute una sola vez
    useEffect( () => {
        //console.log('hey')
    }, [])

    //si agreamos un valor al final, controla las actualizaciones que sufrio el valor
    useEffect( () => {
        //console.log('form state cambio')
    }, [formState])
    
    //controlamos las modificaciones sobre el email
    useEffect( () => {
        //console.log('email state cambio')
    }, [email])

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>   
            <hr/>

            <div className='form-group'>
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className='form-group'>
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@email.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name === '123' && <Message />}
        </>
    )
}
