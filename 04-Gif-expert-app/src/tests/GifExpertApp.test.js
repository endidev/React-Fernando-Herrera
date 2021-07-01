import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp";

describe('Test en GifExpertApp', () => {
    
    
    test('deberia matchear con el snapshot', () => {

        const wrapper = shallow(<GifExpertApp />)

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorias', () => {
        const categories = ['One Peace', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
        
    })
    
    
})