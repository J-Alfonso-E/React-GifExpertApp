import {shallow} from 'enzyme';
import GifExpertApp from '../../GifExpertApp';

describe('Pruebas de GifExpertApp', () => {
    test('SnapShot pagina Principal', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Listas de Categorias', () => {
        const categorias = ['Tales Arise', 'Gears 5'];

        const wrapper = shallow(<GifExpertApp CatPredeterminadas={categorias}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
    });


});