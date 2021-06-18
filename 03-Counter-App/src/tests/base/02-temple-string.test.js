import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string"


describe(' Pruebas 02 template string', () => {
    test('Prueba metodo getSaludo', () => {
        const nombre = 'Adrian'

        const saludo =  getSaludo( nombre );

        expect( saludo ).toBe('Hola ' + nombre);
    })

    //get saludo retorna hola carlos si no tenemos argumento de nombre 

    test('Prueba metodo getSaludo sin parametros', () => {
        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Carlos');
    })
    
    
})