import React from 'react'
import { formulario } from '../hooks/formulario'
export const Formulary = () => {
  const {data, handleSubmit} = formulario({})
  console.log(data)
  return (

    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" name='busqueda'></input>
        <input type="submit" ></input>



      </form>

    </div>

  )

}