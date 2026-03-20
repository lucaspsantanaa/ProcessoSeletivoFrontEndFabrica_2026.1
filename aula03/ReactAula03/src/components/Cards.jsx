import React, { useEffect, useState } from 'react'

export const Cards = () => {
    const[data, setData] = useState([])

    useEffect(() => {
        async function consumoAPI() {
            const res = await fetch("https://valorant-api.com/v1/agents")
            const data = await res.json()
            setData(data.data)
            console.log(data.data)
        }
        consumoAPI()
    }, [])

  return (
    <div>
        {data.map((agente) => {
            return (
                <div key={agente.uuid}>
                    <h3>{agente.displayName}</h3>
                    <img src={agente.displayIcon} alt={agente.displayName}/>
                </div>
            )
        })}
    </div>
  )
}

export default Cards