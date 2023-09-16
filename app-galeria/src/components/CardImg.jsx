import React from 'react'

export const CardImg = ({picture}) => {
  const { id, photographer, photographer_url, url, alt } = picture;
  return (
    <article>
         <div>
                <img src={url} alt={alt}  />
                <div >
                    <h5 >Author: {photographer}</h5>
                    <p >Perfil del <a href={photographer_url}>Author</a></p>
                    <p>{id}</p>
                </div>
            </div>
    </article>
  )
}

