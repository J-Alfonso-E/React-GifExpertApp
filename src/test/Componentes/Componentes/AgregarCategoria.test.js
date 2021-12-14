import { AgregarCategoria } from "../../../Componentes/AgregarCategoria";
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

describe('Pruebas en EnviarCategoria', () =>{
    const setCategories = jest.fn(); //Funcion de Prueba provista por jest
    let wrapper = shallow(<AgregarCategoria EnviarCategoria={setCategories}/>);


    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AgregarCategoria EnviarCategoria={setCategories}/>);
    });
    test('debe de mostarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostarse correctamente', () => {
        const input = wrapper.find('input');
        const value = 'Algo';
        //console.log('Input: ' + input);
        input.simulate('change', {target: {value}}); // El evento de cambiar se le debe de enviar el evento que es las primeras llaves, dentro del evento va lo que queremos enviar en este caso es el target y del target un dato
        //console.log(wrapper.find('p').text().trim());
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('debe no debe llamarse el evento de cambio de valor', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}}); // forma corta de envar una funcion de un evento
        expect(setCategories).not.toHaveBeenCalled(); //Verifica que no se haiga llamado sin poner algo en el input
    });

    test('Cambio de Categoria y limpieza de caja de texto', () => {
        /*
        1. Simular el Cambio de Valor
        2. simular el submit
        3. Verificar el Envio de Categoria se haiga llamado
        4. el valor input debe ser ''
                                */

        
        const valor = 'Tales Arise'; 
        wrapper.find('input').simulate('change', {target: {value: valor}});
        

        //expect(wrapper.find('p').text().trim()).toBe(valor);

        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        expect(setCategories).toHaveBeenCalled();

        //forma de ver cuantas veces se llama la funcion
        expect(setCategories).toHaveBeenCalledTimes(1);

        //Para saber si se llamo como funcion

        expect(setCategories).toHaveBeenCalledWith( expect.any(Function));

        const input = wrapper.find('input');
        //console.log(input.value);

        expect(input.prop('value')).toBe('');
    });
});