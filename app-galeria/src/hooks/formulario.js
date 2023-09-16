import { useState, useEffect } from "react";
export const formulario = (valorDefecto, onAddCategoria) => {
    const [data, setData] = useState(valorDefecto)

    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
          ...value,
          [name]: value,
        });
      };
    const handleSubmit = (ev) => {

        ev.preventDefault()
        if (data.categoria) {
            onAddCategoria(data.categoria);
            reset();
           }

    }

    const reset = () => {
        setData(valorDefecto);
      };
    return {
        data,
        handleSubmit,
        handleChange,
        reset
    }


}