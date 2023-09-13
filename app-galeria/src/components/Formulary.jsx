import React from 'react'
import { formulario } from '../hooks/formulario'
export const Formulary = (form) => {
    
  return (
    
    <div>
      <form action={formulario(form)}>
        <input type="text"></input>
        <input type="submit" value="Submit"></input>
        
        {console.log(formulario.valorDefecto)}
      </form>
      
    </div>
    
  )
  
}