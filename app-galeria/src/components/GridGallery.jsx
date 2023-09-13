import React from 'react'
import { CardImg } from './CardImg'
export const GridGallery = ({categoria}) => {
    const arrayFotos=[1,2,3]
  return (
    <section key={categoria}>
    <h2>{categoria}</h2>
{
arrayFotos.map(picture =>(
<div key={picture}>
    <CardImg  picture={picture} />
    </div>
))

}
    </section>
  )
}


