import { useState } from "react";
export const formulario = (valorDefecto = {}) => {
    const [data, setData] = useState(valorDefecto)

    const serialForms = (form) => {

        const dataForm = new FormData(form)

        const dataObj = {}

        for (let [llave, valor] of dataForm) {

            dataObj[llave] = valor

        }

        return dataObj
    }

    const handleSubmit = (ev) => {

        ev.preventDefault()
        const form = ev.target
        const dataObj = serialForms(form)
        setData(dataObj)

    }
    return {
        data,
        handleSubmit
    }


}