import React from 'react'

export const dadosMocados = () => {
    const handleChange = (e) => {
        const texto = e.target.value;
    }

    const dadosMocados = [
        {
            nome: "João",
            idade: 20,
            id: 1,
        },
        {
            nome: "Thiago",
            idade: "18",
            id:2,
        },
        {
            nome: "Valberto",
            idade: 17,
            id: 3,
        }
    ]
    return <div>Hello World</div>
}
