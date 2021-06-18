import { shallow } from "enzyme";
import CounterApp from "../CounterApp";



describe('CounterApp Test Prof', () => {

    let wrapper = shallow(<CounterApp  />);

    beforeEach( () => {
        wrapper = shallow(<CounterApp  />);
    })

    test('Debe coincidir el snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('Debe mostrar valor por defecto 100', () => {
        const numero = 100;
        const wrapper = shallow(<CounterApp value={numero} />);

        const counterText = parseInt(wrapper.find('h2').text());

        expect( counterText ).toBe( numero )
    })

    test('debe de incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11')
    })

    test('debe de resetear el value', () => {


        const wrapper = shallow(<CounterApp value={105} />)
        ;
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('105')
    })
    
    test('debe de incrementar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9')
    })
})