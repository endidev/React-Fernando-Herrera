import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";



describe('Pruebas 05-Funciones', () => {

    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual( userTest)

    })

    test('getUserActivo debe retornar un obj', () => {
        const nombre = 'Adrian'

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect( user ).toEqual(userTest);
    })
    
    
})