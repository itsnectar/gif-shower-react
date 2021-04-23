import {useState,useEffect} from 'react';
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (categoria) => {

    const [Cargador, setCargador] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifs(categoria).then((gifs) => {
            setCargador({
                data:gifs,
                loading:false
            });
        })
    },[ categoria]); //el [] signfiica que si la categoria cambia,
    //recien ahi volveria a ejecutar esta funcion de useEffects.
/*
    setTimeout(() => {
        setCargador({
            data:[1,2,3,4,5],
            loading:false
        })
    }, 3000);
*/
    return Cargador;
}