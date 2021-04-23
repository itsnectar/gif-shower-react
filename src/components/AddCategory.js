import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = (props) => { //recibe el prop, el cual contiene 
    //la funcion para agregar elementos al arreglo de la lista de componentes.
    const [Value, setValue] = useState(''); //se define un nuevo useState para
    //poder manejar la cadena insertada del input,cual se modifica value con el setValue.

    //esta funcion se encarga de obtener el valor del input y actualizar el valor de Value
    //e.target.value es el valor actual del input, e es el evento.
    const obtenerValorInsertado = (e) => {
        setValue(e.target.value);
    }

    //esta funcion se ejecuta al presionar enter, al presionar enter se agrega
    //primero ejecuta un preventDefault(), luego ve si tiene mas de 2 caracteres
    //para vaciarlo o no al agregarlo
    const addValorInsertado= (e) => {
        e.preventDefault();
        if(Value.trim().length>2) 
        {
            props.setCategorias(categorias => [Value,...categorias]); //añade el valor
            //a las categorias, para esto importa la funcion setCategorias
            //que esta definida en otro componente y le asigna ael valor
            //categorias es el contenido del vector, en este caso en esta funcion no sabe el contenido
            //solo sabe que hay algo despues de eso. por eso es undefined.
            setValue(''); // lo vacia.
        }
    }
//este es el contenido del componente, un input que al apretar añade Value.
//onSubmit = apretar Enter 
    return (
        <>
        <form onSubmit={addValorInsertado}>
            <input 
                type="text"
                value={Value}
                onChange={ obtenerValorInsertado}>
            </input>
        </form>
        </>
    )
}
//Para que no si o si deba recibir la funcion setCategorias del componente anterior.
AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired,
}
