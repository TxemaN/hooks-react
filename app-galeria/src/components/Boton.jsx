
import React, { useState } from 'react'
import { cogerImagen } from "../helpers/cogerImagen";
import { usePexels } from '../hooks/usePexels';


export const Boton = (categoria) => {
    const [pagina, cambiarPagina] = useState(1)
    
    const handleRetroceder = () => {

        cambiarPagina(pagina - 1)
       
        cogerImagen(categoria.categoria, pagina)
       
    }
    const handleAvanzar = () => {

        cambiarPagina(pagina + 1)
        cogerImagen(categoria.categoria, pagina)
        
        




    }

    return (
        <><button onClick={handleRetroceder}>  ANTERIOR </button>
            <button onClick={handleAvanzar}>  SIGUIENTE </button>
        </>
    )
}
