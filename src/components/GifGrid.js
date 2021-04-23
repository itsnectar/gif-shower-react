//import React, {useEffect,useState}  from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';
export const GifGrid = ({categoria}) => { //props.categoria = {categoria}
    
    //const [images, setImages] = useState([]);
    
    const {data:images, loading} = useFetchGifs(categoria); //renombro data como images

    /*
Este codigo mejor lo pasamos al hook de fetchgifs po

    useEffect(()=>{
        getGifs(categoria).then((gifs) => {
            setImages(gifs);
        })
    },[ categoria]); //el [] signfiica que si la categoria cambia,
    //recien ahi volveria a ejecutar esta funcion de useEffects.
*/

//si loading estrue, meustra cargando.
    return (
        <>
            <h3 className="animate__animated animate__fadeInUpBig">{categoria}</h3>
            { loading && <p className="animate__animated animate__flash"> Cargando</p> }  
            <div className="card-grid">
                
                    {
                        images.map( img => {
                            return <GifGridItem key={img.id} {...img}></GifGridItem> //manda img completo,
                        })
                    }
            </div>
        </>
    )
}
