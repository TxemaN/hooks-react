import React, { useState } from 'react'
import { GridGallery } from "./GridGallery"
import { Formulary } from './Formulary'
export const Buscadorr = () => {

  const [arrayCategory, setArrayCategory] = useState([]);



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

        <GridGallery key={categoria} categoria={categoria} />

      ))
      }
    </>
  )
}
