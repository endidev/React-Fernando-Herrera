import { getImagen } from "../../base/11-async-await"


describe('Async await fetch', () => {
    test('debe retornar url de la img', async() => {
        
        const url = await getImagen();

        expect(url.includes('https://') ).toBe(true);
    })
    
})