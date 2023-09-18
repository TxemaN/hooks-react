
export const pexelHelper = async (url) => {

    try {
        const resp = await fetch(`${url}`, {
            headers: {
                'Authorization': 'mumVi2YGbikluEcNGTCofbZyeHkJZIPSTUpGcmqVe9173qGbfmzYGzCe',
            }
        })
       console.log(resp)
        if (resp.ok) {
            const {photos} = await resp.json()
            
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
