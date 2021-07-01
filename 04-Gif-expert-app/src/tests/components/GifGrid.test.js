import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('hook fetch', () => {
    
    const category = 'One Punch';
    

    test('Compararlo con snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={category}/>)
        expect( wrapper).toMatchSnapshot();
    })

    test('debe mostrar items al cargar  imagenes con useFetchGifs', () => {
        
        const gifs = [{
            id: 'abc',
            url: 'https://localhost/cualquier/cosa.jgp',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={category}/>)

        expect( wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })
    
    
})