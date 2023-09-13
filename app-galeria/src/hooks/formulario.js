import { useState } from "react";
export const formulario = (valorDefecto = {})=>{
    const [data, setData] = useState(valorDefecto)

    const serialForms = (form) =>{

        const dataForm = new FormData(form)
        const dataObj = {}

        for(let [prop, val] of dataForm){

            dataObj[prop]=val

        }
        return dataObj
    }

const handleSubmit = (ev) =>{

ev.preventDefault()
const form = ev.target
const dataObj=serialForms(form)
setData(dataObj)


}
return{
    data,
    handleSubmit
}


}