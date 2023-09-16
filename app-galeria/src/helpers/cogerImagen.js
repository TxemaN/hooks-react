
import { pexelHelper } from './pexelHelper'


const urlBase = "https://api.pexels.com/v1/search?query="
export const cogerImagen = async (categoria) => {
    const url = `${urlBase}${categoria}`;
    console.log(url)
    const { photos } = await pexelHelper(url, "get");
    console.log(photos)
    const fotos = photos.map((foto) => ({
        id: foto.id,
        photographer: foto.photographer,
        photographer_url: foto.photographer_url,
        url: foto.src.medium,
        alt: foto.alt
    }));

    console.log(url)
    return { fotos };
}
