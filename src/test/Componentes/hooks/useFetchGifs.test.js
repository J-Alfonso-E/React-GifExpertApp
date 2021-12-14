import {useFetchGifs} from '../../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

//Libreria adicional para probar hooks
// https://react-hooks-testing-library.com/installation

describe('Pruebas en useFetchGifs', () => { // Prueba de Hooks

    test('debe retornar el estado inicial', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Tales Arise'));
        
        const {data, loading} = result.current;
        await waitForNextUpdate({timeout: 10000});
        
        console.log(data, loading);

        expect(data).toEqual([]);
        expect(loading).toBe(true);
        expect(loading).toBeTruthy();
        
    });

    test('Prueba de Retorno de imagenes', async() =>{
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Tales Arise'));
        await waitForNextUpdate({timeout: 10000});
        const {data, loading} = result.current;

        console.log(data);

        expect(data.length).toBe(10);
    })
});