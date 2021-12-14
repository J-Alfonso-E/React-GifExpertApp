
import {shallow} from 'enzyme';
import { GifGridItem } from '../../Componentes/GifGridItem';



describe('Mostrando las Imagenes', () => {

    const imagen = 'https://media4.giphy.com/media/b4ab9TBk9Ornvrt9W8/giphy-downsized-medium.gif?cid=4e4c6c79eazgluaod3tfwrerbs3v77bfd6uivr8mkwsl357h&rid=giphy-downsized-medium.gif&ct=g';

    const titulo = 'Master Chief Halo GIF by Xbox';

    const wrapper = shallow(<GifGridItem title={titulo} url={imagen}/>);

    test('Prueba de imagenes', () =>{
        expect(wrapper).toMatchSnapshot();
    });

    test('Titulo de la imagen', () =>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(titulo);
    });

    test('Verificar que este la imagen con titulo', () =>{
        const img = wrapper.find('img');
        //console.log(img.prop().src); // Una forma de ver la propiedad deseada 
        expect(img.prop('src')).toBe(imagen); //Se puede acceder a las propiedades de mendiante las props
        expect(img.prop('alt')).toBe(titulo);
    });

    test('Verificar que el div tenga la clase animate__fadeInDown', () =>{
        const div = wrapper.find('div');
        const clase = div.prop('className');
        //console.log(img.prop().src); // Una forma de ver la propiedad deseada 
        //console.log(clase);
        
        expect(clase.includes('animate__fadeInDown')).toBe(true);
    });


});

