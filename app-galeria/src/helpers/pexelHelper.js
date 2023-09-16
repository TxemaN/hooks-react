
export const pexelHelper = async (url) => {

    try {

        const resp = await fetch(`${url}`, {
            headers: {
                'Authorization': 'mumVi2YGbikluEcNGTCofbZyeHkJZIPSTUpGcmqVe9173qGbfmzYGzCe',

            }

        })

        if (resp.ok) {
            const {photos} = await resp.json()
            
            return {
                ok: true,
                photos
            }   
        }
        else {
            throw new Error
        }
    } catch (error) {
        return {
            ok: false,
            datos: error
        }
    }
}
