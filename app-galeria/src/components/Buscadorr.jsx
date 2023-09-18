import React, { useState } from 'react'
import { GridGallery } from "./GridGallery"
import { Formulary } from './Formulary'
import { Boton } from './Boton'
import { usePagina } from '../hooks/usePagina'
export const Buscadorr = () => {

  const [arrayCategory, setArrayCategory] = useState([]);
const {prevPage, nextPage, page}=usePagina()


  const handleAddCategoria = (categoria) => {
    if (categoria && !arrayCategory.includes(categoria)) {
      setArrayCategory((prevCats) => [categoria, ...prevCats]);
    }
  };
  return (
    <>
      <h1>BUSCADOR-GALERÍA</h1>
     
      <Formulary onAddCategoria={handleAddCategoria} />
      
      {arrayCategory.map((categoria) => (

        <GridGallery key={categoria} categoria={categoria} page={page} />


      ))
      }
      <button onClick={prevPage}>ANTERIOR</button>
      <button onClick={nextPage}>SIGUIENTE</button>
    </>
  )
}
