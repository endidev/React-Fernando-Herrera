import PropTypes from 'prop-types'


import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"


describe('Componente Gif Grid Item', () =>{

    
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    
    let wrapper = shallow(<GifGridItem title={title} url={url}/>)
    

    test('Mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('Debe tener un texto con el titulo', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('debe tener la imagen, con url y alt, de las propiedades enviadas', () => {
        const img = wrapper.find('img');
        // console.log(img.props())
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    })
    
    test('debe tener el animate__fadeIn', () => {
        const div = wrapper.find('div')
        const testear = div.prop('className').includes('animate__fadeIn');

        expect( testear ).toBe(true);
    })
    
    
})