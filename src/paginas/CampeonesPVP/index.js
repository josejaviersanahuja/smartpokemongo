import React from 'react'
import {campeonesVelocidad} from '../../services/servicios'

export default function CampeonesPVP() {

    const campeones=campeonesVelocidad()

    
    return (
        <>
            <section>
                <h2>Aquí Analizamos los ataques que cargan 3 segundos o menos de cada pokemon</h2>
           </section>
            
            <table>
            <caption><h3>Campeones en velocidad de ataque</h3></caption>
            <thead>
            <tr>
                <th>Pokemon Champion en PVP </th>
                <th>Movimientos</th>
                <th>Numero de turnos</th>
                <th>Tiempo</th>
                <th>Poder</th>
            </tr>
           </thead>
            <tbody>
            {campeones.map(e=> 
                <tr key={e.id + e.forma}>
                    <td>{e.id}. {e.name} y forma({e.forma})</td>
                    <td>{e.ataque_rapido + " + "+ e.ataque_cargado}</td>
                    <td>{e.numTurnos}</td>
                    <td>{e.tiempo}</td>
                    <td>{e.power}</td>
                </tr>)
            }
            </tbody>
             
            
        </table>
        </>
    )
}
