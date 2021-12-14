import React from 'react';
import {shallow} from 'enzyme';
import { GifGrid } from '../../../Componentes/GifGrid';
import { useFetchGifs } from '../../../hooks/useFetchGifs';
jest.mock('../../../hooks/useFetchGifs');

describe('Pruebas de GifGrid', () => {
    //let wrapper = shallow(<GifGrid categoria={''} />);

    /*beforeEach(() =>{ //Cada Prueba que se realiza se ejecuta esta funcion
        wrapper = shallow(<GifGrid categoria={''} />);
    });*/
    test('Snapshot de GifGrid Vacio', () =>{
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid categoria={'Tales Arisen'} />);
        expect(wrapper).toMatchSnapshot();
    }); 

    test('Snapshot de GifGrid con un objeto', () =>{

        const img = [{
            id: '123',
            url: 'https://localhost/cosa.jpg',
            title: 'Titulo de Prueba'
        }]

        useFetchGifs.mockReturnValue({
            data: img,
            loading: false
        });
        const wrapper = shallow(<GifGrid categoria={'Tales Arisen'} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(img.length);
        
    }); 

    

    
});