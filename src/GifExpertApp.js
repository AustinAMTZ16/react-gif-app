import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categorias, estableceCategorias] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory estableceCategorias={estableceCategorias}/>
            <hr />
            <ol>
                {
                    categorias.map(categoria => (
                        <GifGrid 
                            key={categoria}
                            categoria={categoria}
                        />
                    ))
                }
            </ol>
        </>
    )
}