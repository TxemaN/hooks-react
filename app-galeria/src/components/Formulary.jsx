import React from 'react'
import { formulario } from '../hooks/formulario'

export const Formulary = ({ onAddCategoria }) => {
  const estadoInicial = { categoria: "" }
  const {data, handleChange, handleSubmit, reset} = formulario(estadoInicial, onAddCategoria);



  return (

    <div className='d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="categoria"
          id="categoria"
          placeholder="Buscar categoría"
          value={data.categoria}
          onChange={handleChange}
        />
        <input type="submit" value="Añadir" />
      </form>
    </div>

  )

}