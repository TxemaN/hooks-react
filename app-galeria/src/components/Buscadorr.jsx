import React from 'react'
import {GridGallery} from "./GridGallery"
import  {Formulary } from './Formulary'
export const Buscadorr = () => {
    const arrayCategory = ["perro", "polla", "gato"];
    return (
        <>
            
                <h1>BUSCADOR-GALERÍA</h1>
            

            <Formulary />

           {arrayCategory.map((categoria) =>(
            <div key={categoria}>
            <GridGallery  categoria={categoria}/>
            </div>
           ))
           }



        </>
    )
}
