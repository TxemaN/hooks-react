import React from 'react'
import { CardImg } from './CardImg'
import { usePexels } from '../hooks/usePexels';

export const GridGallery = ({categoria}) => {
  const { data: fotos, loading, error } = usePexels(categoria);
  
  return (
    <section >
    <h2>{categoria}</h2>
    {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}

      <div className="row">
{!loading && !error && fotos && fotos.map(picture =>(
<div key={picture.id}>
    <CardImg  picture={picture} />
    </div>
))

}</div>
    </section>
  )
}


