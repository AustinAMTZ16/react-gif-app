import React, {useState, useEffect} from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({categoria})=>{
    
    const {data:images, loading} = useFetchGifs(categoria);
    /*const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs(categoria)
            .then(setImages);
    }, [categoria])*/

    return(
        <>
            <h3>{categoria}</h3>  
            {loading && <p className="animate__animated animate__flash">Cargando imagenes...</p>}
            <div className="card-grid">                  
                {
                    images.map(img => (
                        <GifGridItem 
                            key={img.id}
                            //img={img} 
                            {...img}
                        />
                    ))
                }            
            </div>
        </>        
    )
}