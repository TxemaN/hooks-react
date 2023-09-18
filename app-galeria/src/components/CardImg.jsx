import React from 'react'

export const CardImg = ({ photographer, photographer_url, url, alt }) => {

  return (
    <article>
      <div>
        <img className= "img-fluid" src={url} alt={alt} />
      </div>
      <div >
        <h3 >Author: {photographer}</h3>
        <p >Perfil del <a href={photographer_url}>Author</a></p>

      </div>

    </article>
  )
}

