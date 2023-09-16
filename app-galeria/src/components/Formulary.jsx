import React from 'react'
import { formulario } from '../hooks/formulario'

export const Formulary = ({ onAddCategoria }) => {
  const estadoInicial = { categoria: "" }
  const {data, handleChange, handleSubmit, reset} = formulario(estadoInicial, onAddCategoria);



  return (

    <nav className='className="vh-100 d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="categoria"
          id="categoria"
          placeholder="Añadir categoría"
          value={data.categoria}
          onChange={handleChange}
        />
        <input type="submit" value="Añadir" />
      </form>
    </nav>

  )

}