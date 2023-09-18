
import React, { useState } from 'react'
import { cogerImagen } from "../helpers/cogerImagen";
export const Boton = (valor) => {
   const [pagina, cambiarPagina] = useState(valor)
    const handleAvanzar = (ev) => {
        
        cambiarPagina(pagina+1)
        cogerImagen(pagina+1)
      
         
         
     }
     const handleRetroceder= (ev) => {
        
        cambiarPagina(pagina-1)
        cogerImagen(pagina-1)
          
           
       }
  return (
    <><button onClick={handleAvanzar}>  ANTERIOR </button>
    <button onClick={handleRetroceder}>  SIGUIENTE </button>
    </>
  )
}
