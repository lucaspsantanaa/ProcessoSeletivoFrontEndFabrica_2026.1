"use client"

import { useEffect, useState } from "react"
import {} from "next_aula_04/src/components/Valorant.css"

export default function Valorant() {
    type Agent = {
        uuid: string
        displayName: string
        displayIcon: string
    }

    const [agentes, setAgentes] = useState<Agent[]>([])
    async function getData() {
        const response = await fetch("https://valorant-api.com/v1/agents")
        const data = await response.json()
        setAgentes(data.data)
        return data.data
    }
    useEffect(() => {
        async function pegarDadinhos() {
            const result = await getData()
            setAgentes(result)
        }
        pegarDadinhos()
    }, [])
    return(
        <div className="container">
            <h2>Agentes do Valorant</h2>
            {agentes.map((agente) => (
                <div key={agente.uuid}>
                    <div className="grid">
                        <p>{agente.displayName}</p>
                        <img src={agente.displayIcon} alt={agente.displayName}></img>
                    </div>
                </div>
            ))}
        </div>
    )
}