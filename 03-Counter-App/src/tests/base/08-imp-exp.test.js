import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => {
    test('debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })

    test('debe retornar undefined por id', () => {
        const id = 1;
        const heroe = getHeroeById(12);


        expect(heroe).toBe(undefined);
    })
   
    
    test('debe retornar arreglo heroes dc', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);


        const heroesData = heroes.filter( h => h.owner === owner);


        expect(heroe).toEqual( heroesData );
    })

    test('debe retornar arreglo heroes marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);


        const heroesData = heroes.filter( h => h.owner === owner);


        expect( heroe.length ).toBe( 2 );
    })
}) 