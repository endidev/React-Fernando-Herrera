import React from 'react';
import { getByText, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import PrimeraApp from '../PrimeraApp';
import {shallow} from 'enzyme'

describe('Pruebas en PrimeraApp', () => {
    // test('debe mostrar un mensaje', () => {
    //     const saludo = 'Hola, soy endi';
    //     const { getByText } = render(<PrimeraApp saludo= {saludo} />)
    //     expect(getByText( saludo )).toBeInTheDocument;    
    // })

    test('debe mostrar <PrimeraAPP /> correctamente', () => {
        const saludo = 'Hola, soy endi';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('debe mostrar subtitulo enviado por props', () => {
        const saludo = 'Hola, soy endi';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subTitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subTitulo);
    })
    
    
})