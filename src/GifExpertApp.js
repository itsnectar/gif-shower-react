import React,{useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';
export const GifExpertApp = () => {

    //const categorias = ['poto','caca','peo'];
    const [categorias, setCategorias] = useState( ['Porter Robinson']);
/*
    const handleAdd = () => {
      setCategorias([...categorias,'raja']);
    }
    */
    //        <button onClick={handleAdd}>Agregar</button>

    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias}/>
        <hr></hr>
        <ol>
          {
            categorias.map(category => {
              return <GifGrid key ={category} categoria = { category } >{category}</GifGrid>
            })
          }
        </ol>
      </>
    )
  }
  
  GifExpertApp.propTypes = {
  
  }