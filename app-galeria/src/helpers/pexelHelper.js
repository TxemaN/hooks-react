
export const pexelHelper = async (url2) => {

    try {
        const resp = await fetch(`${url2}`, {
            headers: {
                'Authorization': 'mumVi2YGbikluEcNGTCofbZyeHkJZIPSTUpGcmqVe9173qGbfmzYGzCe',
            }
        })
       console.log(resp)
        if (resp.ok) {
            const {photos} = await resp.json()
            console.log(photos)
            return {
                ok: true,
                photos
            }   
        }else {
            throw new Error("no se encuentran imágenes")
        }
    } catch (error) {

        console.log(error)
        return {
            ok: false,
            datos: error
        }
    }
}
