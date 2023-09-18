

import { useState, useEffect } from "react"
import { cogerImagen } from "../helpers/cogerImagen";
export const usePexels = (categoria) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    const pillarFotos = async () => {
        if (categoria) {
           

            try {
                const data = await cogerImagen(categoria);
                console.log(data)

                if (data) {

                    setState({
                        data: data.fotos,
                        loading: false,
                        error: null
                    });
                } else {
                    throw new Error('No saca las fotos');
                }

            } catch (error) {
                setState({
                    data: null,
                    loading: false,
                    error: error.message
                });
            }
        }
    };
    useEffect(() => {
        

        pillarFotos();
    }, [categoria]);

    return state;
};
