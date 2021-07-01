import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/>);
    
    beforeEach( () => {
        jest.clearAllMocks();

        wrapper = shallow( <AddCategory setCategories={ setCategories }/>);
    })

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe cambiar caja de texto', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });
        
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe postear informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled();
    })
    
    test('debe de llamar el setCategories, y limpiar la caja de texto', () => {
        
        const value = 'Yu yu hakusho';

        wrapper.find('input').simulate('change', { target: { value }});


        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));


        // expect( inputValue ).toBe( '' );
        expect( wrapper.find('input').prop('value')).toBe('');
    })
    
})