
import { pexelHelper } from './pexelHelper'

//LA CONSTANTE URLBASE SE DEJA FUERA PORQUE SU VALOR SIEMPRE SERÁ EL MISMO EN CUALQUIER EJECUCIÓN//
const urlBase = "https://api.pexels.com/v1/search?query="
export const cogerImagen = async (categoria, page=1) => {
   
    const url = `${urlBase}${categoria}&per_page=6&page=`;
    const url2 =  `${url}${page}`
    
    const { photos } = await pexelHelper(url2);
    console.log(photos)
    const fotos = photos.map((foto) => ({
        id: foto.id,
        photographer: foto.photographer,
        photographer_url: foto.photographer_url,
        url: foto.src.medium,
        alt: foto.alt
        
    }));

    console.log(url2)
    return { fotos };
}
