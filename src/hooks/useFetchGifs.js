import { useEffect, useState } from "react"
import { ObtGif } from "../Complementos/GifFetch";

export const useFetchGifs = ( categoria ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        ObtGif(categoria)
        .then(imgs => {
            setTimeout ( () => {
                setState({
                    data: imgs,
                    loading: false
                })
            }, 3000);
        })
    }, [categoria])

    /*setTimeout( () => {
        setState({
            data: [1,2,3,4],
            loading: false
        })
    }, 3000);*/

    return state; //{data: [], loading: true}
}