import React from 'react'
import { CardImg } from './CardImg'
import { usePexels } from '../hooks/usePexels';
import { Boton } from './Boton';
export const GridGallery = ({ categoria, page }) => {
  const { data: fotos, loading, error } = usePexels(categoria, page);
 

  return (
    <section >
      <h2>{categoria}</h2>
      
      {error && <p>Error: {error} </p>}
      {(loading && !error) ? <h1> Loading</h1> : (
        <div className='d-flex'>
          {fotos.map(picture => (

            <CardImg key={picture.id} {...picture} />

          ))
          }
          
          </div>
      )}

    </section>
  )
}


