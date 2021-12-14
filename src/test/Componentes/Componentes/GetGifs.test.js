import { ObtGif } from "../../../Complementos/GifFetch";


describe('Prueba cpn GetGifs Fetch', () => {
    test('debe traer elementos', async() =>{
        const gifs = await ObtGif('Tales Arise');

        expect(gifs.length).toBe(10);
    });

    test('Si no se especifica la categoria', async() =>{
        const gifs = await ObtGif('');

        expect(gifs.length).toBe(0);
    });
});