import React, {useState} from 'react';
import ProTypes from 'prop-types';

export const AddCategory = ({estableceCategorias}) => {
    const [inputValue, setInputValue] = useState('')

    const hadleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const hadleSubmit = (e) =>{
        e.preventDefault();
        console.log('Submit hecho');
        if(inputValue.trim().length > 2){
            estableceCategorias(categorias =>[inputValue, ...categorias]);
            setInputValue('');
        }        
    }
    return (
        <>
            <form onSubmit={hadleSubmit}>
                <h3>Buscar: {inputValue}</h3>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={hadleInputChange}
                />
            </form>
        </>
    )
}

AddCategory.prototype={
    estableceCategorias: ProTypes.func.isRequired
}