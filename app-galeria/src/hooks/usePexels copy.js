

import { useState, useEffect } from "react"
import { cogerImagen } from "../helpers/cogerImagen";
export const usePexels = (categoria = "") => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(null)

    const pillarFotos = async () => {
        if (categoria === "") return


        const data = await cogerImagen(categoria);
        console.log(data)

        if (data.ok) {

            setResponse(data.photos)
            setIsLoading(false)

        } else {
            setIsError(data.error)
        }

    };

    useEffect(() => {
        pillarFotos();
    }, [categoria]);

    return {
        response,
        isLoading,
        isError
    };
};
