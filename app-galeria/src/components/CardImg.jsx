import React from 'react'

export const CardImg = ({picture}) => {
  const { id, photographer, photographer_url, url, alt } = picture;
  return (
    <article>
         <div className="card h-100">
                <img src={url} alt={alt} className="card-img-top img-fluid" />
                <div className="card-body">
                    <h5 className="card-title">Author: {photographer}</h5>
                    <p className="card-text">Perfil del <a href={photographer_url}>Author</a></p>
                    <p>{id}</p>
                </div>
            </div>
    </article>
  )
}

