

describe('Pruebas demo.test', () => {
    test('String iguales', () => {
        
        //1. Inicializacion
        const mensaje = 'Hola Mundo';
    
        //2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        //3 Observar comportamiento.
        expect( mensaje ).toBe( mensaje2 );
    })
})